#!/usr/bin/env node
"use strict";

const commander = require("commander");

const ejs = require("../index.js");

commander.version(require("../package.json").version)
  .option("-d, --data [data]", "The data to render template")
  .option("-t, --template [template]", "The ejs template file")
  .option("-f, --file [file]", "The file path of rendered content")
  .parse(process.argv);

ejs.render(commander.data, commander.template, commander.file);
