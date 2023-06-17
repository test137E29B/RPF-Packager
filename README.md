# RPF-Packager

A utility for automatically creating RPF files for Map Mods. This will not work for vehicle mods (yet)

## Contents

- [Build](#build)
- [Usage](#usage)
- [Notes](#notes)
- [Credits](#credits)

## Build

You can create an exe from the source scripts with `npm run package`, though one has already been supplied in this Repository in the `RPF-Packager` folder

## Usage

- Grab the latest release from <https://github.com/test137E29B/RPF-Packager/releases>
- In the `input` folder, create a folder with the name you want your DLC Pack to have, for example `MYDLCPack`. This has to be unique as it'll be used as the DLC hashname etc.
- In your newly created folder, create a folder called `interior` (or `int`). This is where you will place all your files for MLO Interiors. Do not place non-MLO files in here.
- In your newly created folder, create a folder called `props`. This is where you will place all your files for regular maps (such as ymaps in the world). Do not place MLO interior files in here.
- You will need a correctly generated _manifest file no matter which you are using, you can create this with CodeWalker.
- Run `index.exe` to package your DLC Pack (You can create multiple folders and package multiple DLC Packs at once!). The Max size of this DLCPack is 4GB - you can package multiple packs together in a single DLCPack if you like!
- In `output` you will find your folder with a `dlc.rpf` inside of it. The tool will have automatically generated all the files it needs, so you do not need to edit this rpf! :)

You can use these DLC Packs in RageMP 1.1 without affixing, or RageMP 0.3 with affixing via RageMp's plugin, or manually.
These have not been tested with Base GTA V or RageMP 0.3. For GTA V Story Mode you should be fine without affixing.

## Notes

- `GTAUtil.exe` is used here, and so sometimes may ask for your GTA V Installation Path.
- After a GTA V Update, you should head to `RPF-Packager/utils` and open a command prompt, using the command `./GTAUtil.exe buildcache`. This will ask for your GTA V path, and could take up to 30 minutes to create the cache of new GTA V Files. It's not really needed for this tool, but GTAUtil has a lot of other cool features.

## Credits

**GTAUtil** - <https://github.com/indilo53/gtautil>
