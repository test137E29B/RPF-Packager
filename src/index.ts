import { execSync } from 'child_process';
import { copyFileSync, Dirent, existsSync, mkdirSync, readdirSync, removeSync, writeFileSync } from 'fs-extra';
import { dirname, join, resolve } from 'path';
import { generateContentXml, generateSetupXml } from './utils';

const getDirectories = (path: string): { path: string; name: string }[] =>
  readdirSync(path, { withFileTypes: true })
    .filter((entry: Dirent) => entry.isDirectory())
    .map((entry: Dirent) => ({ path: join(path, entry.name), name: entry.name }));

const getFiles = (path: string): { filePath: string; fileName: string }[] =>
  readdirSync(path, { withFileTypes: true })
    .filter((entry: Dirent) => entry.isFile())
    .map((entry: Dirent) => ({ filePath: join(path, entry.name), fileName: entry.name }));

const makeDir = (path: string) => {
  if (!existsSync(path)) {
    mkdirSync(path);
  }
};

const call = (command: string) => execSync(command, { maxBuffer: 1024 * 2000000000, stdio: 'inherit' });

(() => {
  const isPackaged = __dirname.includes('snapshot');
  const directoryName = isPackaged ? dirname(process.execPath) : __dirname;
  makeDir(resolve(directoryName, 'input'));
  const runtimeFolder = directoryName.split('\\').slice(-1).pop() ?? 'bin';
  const gtaVUtilExe = `"${resolve(directoryName, 'utils', 'GTAUtil.exe')}"`;
  const directories = getDirectories(resolve(directoryName, 'input'));
  console.info(`Creating Replacement RPF files from ${directories.length} directories...`);
  makeDir(resolve(directoryName, 'output'));
  for (const { path, name } of directories) {
    console.info(`Creating Replacement RPF file for ${name}`);
    // Create temp folder
    makeDir(resolve(directoryName, 'temp'));
    makeDir(resolve(directoryName, 'temp', 'files'));
    makeDir(resolve(directoryName, 'temp', 'x64'));

    // Move the files into a temp replacement folder
    const files = getFiles(path);
    console.info(`Copying ${files.length} files to temporary directory...`);
    for (const { filePath, fileName } of getFiles(path)) {
      copyFileSync(filePath, resolve(directoryName, 'temp', 'files', fileName));
    }

    // Package temp/files directory into replacement.rpf
    console.info('Creating replacement.rpf from /temp/files');
    call(`${gtaVUtilExe} createarchive --input ./${runtimeFolder}/temp/files --output ./${runtimeFolder}/temp/x64 --name replacement`);

    // Delete temp/files directory
    console.info('Deleting /temp/files');
    removeSync(resolve(directoryName, 'temp', 'files'));

    // Write to temp folder the XML files for setup2 and content
    console.info('Generating content.xml and setup2.xml');
    writeFileSync(resolve(directoryName, 'temp', 'content.xml'), generateContentXml(name));
    writeFileSync(resolve(directoryName, 'temp', 'setup2.xml'), generateSetupXml(name));

    // Package temp into an RPF and move to output folder with filename of ${name}.rpf
    console.info(`Creating dlc.rpf for ${name} from /temp`);
    makeDir(resolve(directoryName, 'output', name));
    call(`${gtaVUtilExe} createarchive --input ./${runtimeFolder}/temp --output ./${runtimeFolder}/output/${name} --name dlc`);

    // Delete temp folder
    console.info('Deleting /temp');
    removeSync(resolve(directoryName, 'temp'));
  }
  console.info('Finshed!');
})();
