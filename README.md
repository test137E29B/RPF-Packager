# RPF-Packager

A utility for automatically creating RPF files.

## Contents

- [Build](#build)
- [Usage](#usage)
- [Notes](#notes)
- [Credits](#credits)

## Build

You can create an exe from the source scripts with `npm run package`, though one has already been supplied in this Repository in the `RPF-Packager` folder

## Usage

- In the `input` folder, create a folder with the name you want your DLC Pack to have, for example `MYDLCPack`. This has to be unique as it'll be used as the DLC hashname etc.
- In your newly created folder, place all the files you would normally place inside the `replacement.rpf`, such as `.ymap`, `.ytyp`, `.ydr` and so on.
- Run `index.exe` to package your DLC Pack (You can create multiple folders and package multiple DLC Packs at once!)
- In `output` you will find your folder with a `dlc.rpf` inside of it. The tool will have automatically generated all the files it needs, so you do not need to edit this rpf! :)

You can use these DLC Packs in RageMP 1.1 without affixing, or RageMP 0.3 with affixing via RageMp's plugin, or manually.
These have not been tested with Base GTA V, but should be fine without affixing.

## Notes

- `GTAUtil.exe` is used here, and so sometimes may ask for your GTA V Installation Path.
- After a GTA V Update, you should head to `RPF-Packager/utils` and open a command prompt, using the command `./GTAUtil.exe buildcache`. This will ask for your GTA V path, and could take up to 30 minutes to create the cache of new GTA V Files. It's not really needed for this tool, but GTAUtil has a lot of other cool features.

## Credits

**GTAUtil** - <https://github.com/indilo53/gtautil>
