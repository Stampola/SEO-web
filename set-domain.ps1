# set-domain.ps1 - replace https://example.com with your real domain
# Usage: .\set-domain.ps1 https://searchfit-pro.pages.dev

param([Parameter(Mandatory=$true)][string]$NewDomain)

$NewDomain = $NewDomain.TrimEnd('/')

Set-Location $PSScriptRoot

$files = Get-ChildItem -File -Include *.html,*.xml,*.txt,*.json -Recurse |
         Where-Object { (Get-Content $_.FullName -Raw) -match 'https://example\.com' }

if (-not $files) {
  Write-Host "Nothing to replace - example.com not found."
  exit 0
}

Write-Host "Replacing https://example.com -> $NewDomain in:"
foreach ($f in $files) {
  Write-Host "  - $($f.Name)"
  $content = Get-Content $f.FullName -Raw
  $content = $content -replace 'https://example\.com', $NewDomain
  Set-Content -NoNewline -Path $f.FullName -Value $content
}
Write-Host "Done. Commit and push:"
Write-Host "  git add . ; git commit -m 'Set production domain' ; git push"
