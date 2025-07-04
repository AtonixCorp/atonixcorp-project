#!/usr/bin/env node
'use strict';

const { Command } = require('commander');
const program = new Command();

program
  .name('string-util')
  .description('CLI for JavaScript string utilities')
  .version('0.8.0');

program
  .command('split')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    const result = str.split(options.separator, limit);
    console.log(result);
  });

program.parse();