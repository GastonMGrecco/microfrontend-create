#!/usr/bin/env node
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import shell from 'shelljs';

// Follow import is required to ask --version at the moment
import './helpers/version.cjs';

import './helpers/colors.cjs';

import baseFolders from './builder/baseFolders.js';
import baseFiles from './builder/baseFiles.js';
import frameworkSwitch from './builder/frameworkSwitch.js';
import webpackFile from './builder/webpackFile.js';
import htmlFile from './builder/htmlFile.js';
import bootstrapFile from './builder/bootstrapFile.js';
import answer from './inquirer/answers.js'



(async function(){
  const fileName = answer.name[0].toUpperCase()+answer.name.toLowerCase().slice(1,answer.name.length)
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
    // Create base folders
    baseFolders(fs, answer);
    // Create base files
    baseFiles(fs, path, __dirname, answer);
    // Create folders and files in order to framework
    frameworkSwitch(fs, path, __dirname, answer, fileName);
    // Create webpack.config.js file
    webpackFile(fs, path, __dirname, answer, fileName );
    //Create index.html
    htmlFile(fs, path, __dirname, answer);
    //Create bootstrap.js or bootstrap.ts
    bootstrapFile(fs, path, __dirname, answer, fileName);

    shell.echo(`
    Your '${answer.name}' microfrontend have been created successfully!!!

    Next steps:

    ▶️   cd ${answer.name}
    ▶️   npm install
    ▶️   npm start
      `.yellow)

}
)()