<#
.SYNOPSIS
  Tu dong dong bo moi thay doi trong thu muc du an len GitHub (Netlify Continuous Deployment).
.DESCRIPTION
  Chay 1 lan voi tuy chon -Watch de tu dong git commit + push moi khi ban chinh sua & luu file,
  hoac chay khong tham so de day ngay ban cap nhat moi nhat len https://chinese-culture-explorer.netlify.app
#>
param(
  [switch]$Watch = $false
)

$ErrorActionPreference = "Stop"
Set-Location (Split-Path -Parent $PSScriptRoot)

function Push-Changes {
  $status = git status --porcelain
  if ([string]::IsNullOrWhiteSpace($status)) {
    return
  }
  $stamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
  Write-Host "[$stamp] Phat hien thay doi -> dang dong bo len GitHub / Netlify..." -ForegroundColor Cyan
  git add -A
  git commit -m "chore: auto-sync site update ($stamp)" | Out-Null
  $hasRemote = (git remote) -contains "origin"
  if ($hasRemote) {
    git push origin main
    Write-Host "[$stamp] Da day len GitHub! Netlify dang tu dong cap nhat https://chinese-culture-explorer.netlify.app" -ForegroundColor Green
  } else {
    Write-Host "[$stamp] Da luu lich su Git cuc bo. Hay chay 'git remote add origin <URL_REPO_GITHUB>' 1 lan de kich hoat auto-push." -ForegroundColor Yellow
  }
}

Push-Changes

if ($Watch) {
  Write-Host "Dang theo doi thay doi thu muc (Nhan Ctrl+C de dung)..." -ForegroundColor Green
  while ($true) {
    Start-Sleep -Seconds 5
    Push-Changes
  }
}
