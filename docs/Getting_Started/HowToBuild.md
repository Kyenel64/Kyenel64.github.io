# How to Build
This page is a step-by-step guide on how to build and run Locus on your system.
Compiling the source code from the <a href="https://github.com/Kyenel64/Locus-Engine/tree/develop" target="_blank">develop</a> branch will get you the latest updates on Locus. <br>
If you would like to download the most recent release of Locus, head to the <a href="https://github.com/Kyenel64/Locus-Engine/releases/tag/v0.1.0-alpha" target="_blank">latest release page</a> and download the zip file.

## Requirements
- Windows OS
- OpenGL 4.6 supported hardware
- Visual Studio 2022
- Python 3

## Downloading the source code
Locus utilizes submodules so downloading the zip of the source code will not work. 
Instead, use the following command within the directory you want to download Locus. <br> 
`git clone --recurse-submodules https://github.com/kyenel64/Locus-Engine`

## Generating the project
Run `Scripts/Setup.bat` and follow the prompts to install premake and the Vulkan shader toolchain. <br>
Make sure 'Shader Toolchain Debug Symbols - 64-bit' is selected when the Vulkan install pop-up opens.
You might have to run the setup script twice if prompted.

## Building the solution
Once the setup is finished, open `Locus.sln` which should be generated in the root directory. <br>
Choose the configuration and build the solution. `Locus-Editor.exe` will be generated in `bin/{configuration}-windows-x86_64/Locus-Editor`.