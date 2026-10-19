$feishu = Get-Content 'd:\TRAE SOLO CN\project\Official-wiki\temp\results_feishu_clean.md' -Raw
$local  = Get-Content 'd:\TRAE SOLO CN\project\Official-wiki\文案集\project\results\3.3 Results.md' -Raw
[System.IO.File]::WriteAllText('d:\TRAE SOLO CN\project\Official-wiki\temp\fs_norm.txt', $feishu, [System.Text.Encoding]::UTF8)
[System.IO.File]::WriteAllText('d:\TRAE SOLO CN\project\Official-wiki\temp\lo_norm.txt', $local, [System.Text.Encoding]::UTF8)
Write-Output 'written'
