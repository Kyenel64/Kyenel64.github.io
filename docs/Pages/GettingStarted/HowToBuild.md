# How to Build
This page is a step-by-step guide on how to build and run Locus on your system.
Compiling the source code from the <a href="https://github.com/Kyenel64/Locus-Engine/tree/develop" target="_blank">develop</a> branch will get you the latest updates on Locus. <br>
If you would like to download the most recent release of Locus, head to the <a href="https://github.com/Kyenel64/Locus-Engine/releases" target="_blank">latest release page</a> and extract the zip file. <br>
Warning: The application currently has no signature so it is recommended to build from source. 

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

## 4. Running the engine editor
- The .exe file will be generated in bin/(Config)-windows-x86_64/Locus-Editor

## Note:
- Scripts in projects must be compiled manually for now. Build the VS solution within your project directory when making changes to scripts. 