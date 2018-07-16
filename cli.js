#!/usr/bin/env node
'use strict';

const meow = require('meow');
const router = require('./src/router');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

updateNotifier({ pkg }).notify();

const cli = meow(`
Usage

   $ facelift <command> <params>

   $ facelift sample <param>             # Uses the <PARAM>
   $ facelift other <param>              # Other the <PARAM>
   $ facelift another <param>            # Another the <PARAM>
   
 Examples

   $ facelift sample TEST                # Uses the TEST
   $ facelift sample YOLO                # Uses the YOLO
   $ facelift other YOLO                 # Uses the YOLO
   $ facelift another YOLO               # Uses the YOLO
`,
  {
    alias: {
      v: 'version'
    },
    boolean: ['version']
  }
);

if (cli.input.length > 0) {
	router.init(cli.input, cli.flags);
} else {
	cli.showHelp(2);
}