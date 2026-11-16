<#
.SYNOPSIS
  Tao 1 ban sao luu (backup) an toan cho website truoc khi cap nhat.
.DESCRIPTION
  1. Luu moi thay doi dang do (neu co) thanh 1 commit.
  2. Gan nhan Git (tag) "backup-YYYYMMDD-HHmm" va day len GitHub.
  3. Xuat file nen .zip cua toan bo ma nguon vao thu muc backups\ (khong bi day len web).
.EXAMPLE
  powershell -ExecutionPolicy Bypass -File .\scripts\backup-snapshot.ps1
  powershell -ExecutionPolicy Bypass -File .\scripts\backup-snapshot.ps1 -Note "truoc khi doi giao dien"
#>
param(
  [string]$Note = "manual backup"
)

$ErrorActionPreference = "Stop"
Set-Location (Split-Path -Parent $PSScriptRoot)

$stamp = Get-Date -Format "yyyyMMdd-HHmm"
$tag = "backup-$stamp"

# 1. Commit pending changes so the snapshot is complete
$pending = git status --porcelain
if (-not [string]::IsNullOrWhiteSpace($pending)) {
  git add -A
  git commit -m "chore: save work before backup $tag" | Out-Null
  Write-Host "Da luu cac thay doi dang do vao Git." -ForegroundColor Yellow
}

# 2. Annotated tag
git tag -a $tag -m "Backup $stamp - $Note"
Write-Host "Da tao nhan backup: $tag" -ForegroundColor Green

# 3. Zip archive (outside of Git tracking, ignored by .gitignore)
$backupDir = Join-Path (Get-Location) "backups"
if (-not (Test-Path $backupDir)) { New-Item -ItemType Directory -Path $backupDir | Out-Null }
$zipPath = Join-Path $backupDir "chinese-culture-explorer-$stamp.zip"
git archive --format=zip -o "$zipPath" $tag
Write-Host "Da xuat file nen: $zipPath" -ForegroundColor Green

# 4. Push tag (and any new commit) to GitHub
$hasRemote = (git remote) -contains "origin"
if ($hasRemote) {
  git push origin main
  git push origin $tag
  Write-Host "Da day nhan $tag len GitHub (an toan ngay ca khi may tinh hong)." -ForegroundColor Green
} else {
  Write-Host "Chua co remote 'origin' - backup chi luu tren may." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Danh sach cac ban backup hien co:" -ForegroundColor Cyan
git tag -l "backup-*" -l "stable-*" --sort=-creatordate
