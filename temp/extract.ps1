$raw = Get-Content 'd:\TRAE SOLO CN\project\Official-wiki\temp\results_feishu_latest.md' -Raw
$json = $raw | ConvertFrom-Json
$content = $json.data.document.content
if (-not $content) { Write-Error 'no content'; exit 1 }
# Unescape markdown: content is JSON string with \n etc. ConvertFrom-Json already decoded it.
[System.IO.File]::WriteAllText('d:\TRAE SOLO CN\project\Official-wiki\temp\results_feishu_clean.md', $content, [System.Text.Encoding]::UTF8)
Write-Output ('clean length: ' + $content.Length)
