const copy = require('copy-template-dir')
const path = require('path')
const fs = require('fs');

const log = console.log
var Mustache = require('mustache');

function getObjFromFile(fileName) {
  return JSON.parse(readFromFile(fileName));
}

function readFromFile(fileName) {
  return fs.readFileSync(fileName, 'utf8')
}

function writeToFile(fileName, content) {
  fs.writeFileSync(fileName, content, 'utf8');
}

const vars = getObjFromFile('./tmp/facelift.json')

const inDir = path.join(process.cwd(),   'templates/docs')
const outDir = path.join(process.cwd(),  'tmp/docs')

copy(inDir, outDir, vars, (err, createdFiles) => {
  if (err) throw err
  var output = Mustache.render(readFromFile('./templates/docs/index.html'), vars);
  createdFiles.forEach(filePath => console.log(`Created ${filePath}`))
  writeToFile('./tmp/docs/index.html', output)
  console.log('done!')
})

