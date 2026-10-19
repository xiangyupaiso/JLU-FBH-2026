$raw = Get-Content 'd:\TRAE SOLO CN\project\Official-wiki\temp\results_feishu_latest.md' -Raw
Write-Output $raw.Substring(0, [Math]::Min(3000, $raw.Length))
Write-Output '---END PREVIEW---'
Write-Output ('Total length: ' + $raw.Length)
