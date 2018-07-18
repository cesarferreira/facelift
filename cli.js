#!/usr/bin/env node
'use strict';

const meow = require('meow');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');
const copy = require('copy-template-dir')
const path = require('path')
const fs = require('fs');
const log = console.log
var Mustache = require('mustache');

updateNotifier({ pkg }).notify();

const cli = meow(`
Usage

   $ facelift 
`,
  {
    alias: {
      v: 'version'
    },
    boolean: ['version']
  }
);

// todo check if facelift.json exists

function getObjFromFile(fileName) { return JSON.parse(readFromFile(fileName)); }
function readFromFile(fileName) { return fs.readFileSync(fileName, 'utf8'); }
function writeToFile(fileName, content) { fs.writeFileSync(fileName, content, 'utf8'); }

const vars = getObjFromFile(process.cwd()+'/facelift.json')

const inDir = path.join(__dirname, 'templates/docs')
const outDir = path.join(process.cwd(), 'docs')

copy(inDir, outDir, vars, (err, createdFiles) => {
  if (err) throw err
  var output = Mustache.render(readFromFile(__dirname+'/index.html'), vars);
  createdFiles.forEach(filePath => console.log(`Created ${filePath}`))
  writeToFile(outDir+'/index.html', output)
  console.log('done!')
})

