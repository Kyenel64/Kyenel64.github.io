# How to Build
This page is a step-by-step guide on how to build and run Locus on your system.
Compiling the source code from the <a href="https://github.com/Kyenel64/Locus-Engine/tree/develop" target="_blank">develop</a> branch will get you the latest updates on Locus. <br>
If you would like to download the most recent release of Locus, head to the <a href="https://github.com/Kyenel64/Locus-Engine/releases/tag/v0.1.0-alpha" target="_blank">latest release page</a> and download the zip file. <br>
Note: The application currently has no .exe signature so it is recommended to build from source. 

## Requirements
- Windows OS
- OpenGL 4.5 supported hardware
- Visual Studio 2022
- Python 3
- .NET SDK

## 1. Downloading source code
- Run `git clone --recursive https://github.com/kyenel64/Locus-Engine` in the command prompt. Remember to include `--recursive` as Locus uses submodules.

## 2. Run Scripts/Setup.bat
- Run Scripts/Setup.bat to install premake and generate a Visual Studio solution.
- IMPORTANT: Make sure 'Shader Toolchain Debug Symbols - 64-bit' is selected if the Vulkan pop-up opens.

## 3. Build using Visual Studio
- Open Locus.sln
- Build solution. (Locus-Editor should be selected as the startup project).

## 3.1 (Temp) Build SandboxProject
- Before running Locus, you need to build the "SandboxProject" in the "Locus-Editor" directory. Locus does not have a proper project system setup yet so this is a temporary solution.
- Run Locus-Editor/SandboxProject/Setup.bat.
- Open and build Locus-Editor/SandboxProject/Sandbox.sln.

## 4. Running the engine editor
- The .exe file will be generated in bin/(Config)-windows-x86_64/Locus-Editor