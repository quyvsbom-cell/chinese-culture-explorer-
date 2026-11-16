<#
.SYNOPSIS
  Khoi phuc website ve 1 ban backup cu (theo nhan Git) khi ban cap nhat moi gap su co.
.DESCRIPTION
  - Khong xoa lich su: tao 1 commit moi dua toan bo file ve dung trang thai cua ban backup.
  - Sau do day len GitHub de Netlify tu dong deploy lai ban on dinh.
.EXAMPLE
  powershell -ExecutionPolicy Bypass -File .\scripts\restore-backup.ps1               # liet ke cac ban backup
  powershell -ExecutionPolicy Bypass -File .\scripts\restore-backup.ps1 -Tag stable-2026-11-16
#>
param(
  [string]$Tag = ""
)

$ErrorActionPreference = "Stop"
Set-Location (Split-Path -Parent $PSScriptRoot)

git fetch origin --tags 2>$null | Out-Null

if ([string]::IsNullOrWhiteSpace($Tag)) {
  Write-Host "Cac ban backup co the khoi phuc (moi nhat o tren):" -ForegroundColor Cyan
  git tag -l "backup-*" -l "stable-*" --sort=-creatordate --format="%(refname:short)  |  %(creatordate:short)  |  %(subject)"
  Write-Host ""
  Write-Host "Chay lai kem -Tag <ten-nhan> de khoi phuc, vi du:" -ForegroundColor Yellow
  Write-Host "  powershell -ExecutionPolicy Bypass -File .\scripts\restore-backup.ps1 -Tag stable-2026-11-16"
  exit 0
}

git rev-parse --verify --quiet "refs/tags/$Tag" | Out-Null
if ($LASTEXITCODE -ne 0) {
  Write-Host "Khong tim thay nhan '$Tag'." -ForegroundColor Red
  exit 1
}

$confirm = Read-Host "Khoi phuc toan bo website ve ban '$Tag' va day len Netlify? (y/N)"
if ($confirm -ne "y" -and $confirm -ne "Y") {
  Write-Host "Da huy." -ForegroundColor Yellow
  exit 0
}

# Safety net: snapshot current state before restoring
$stamp = Get-Date -Format "yyyyMMdd-HHmm"
$pending = git status --porcelain
if (-not [string]::IsNullOrWhiteSpace($pending)) {
  git add -A
  git commit -m "chore: save work before restoring $Tag" | Out-Null
}
git tag -a "before-restore-$stamp" -m "State before restoring $Tag"

# Restore all tracked files to the backup version (history is preserved)
git read-tree --reset -u $Tag
git commit -m "revert: restore site to backup $Tag" | Out-Null
Write-Host "Da khoi phuc file ve ban $Tag." -ForegroundColor Green

if ((git remote) -contains "origin") {
  git push origin main
  git push origin "before-restore-$stamp"
  Write-Host "Da day len GitHub - Netlify se tu deploy lai ban on dinh sau ~30 giay." -ForegroundColor Green
}
Write-Host "Neu muon quay lai trang thai truoc khi khoi phuc: -Tag before-restore-$stamp" -ForegroundColor Cyan
