Param(
	[Parameter(Mandatory=$True)]
	[string]
	$WorkingFolder
)

$powershellScripts = Get-ChildItem -Path "$WorkingFolder" -Filter "*.ps1" -Exclude "*.tests.*" -Recurse -File

Function Test-PowershellScript {
  Param(
    [string]$FilePath
  )

  It "is a valid Powershell Code" {
    $psFile = Get-Content -Path $FilePath -ErrorAction Stop
    $errors = $null
    $null = [System.Management.Automation.PSParser]::Tokenize($psFile, [ref]$errors)
    $errors.Count | Should -Be 0
  }
}

ForEach ($powershellScript In $powershellScripts) {
  Describe $powershellScript.FullName.Replace($WorkingFolder, "") {
    Test-PowershellScript -FilePath $powershellScript.FullName
  }
}
