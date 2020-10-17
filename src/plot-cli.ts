#!/usr/bin/env node
const packageJson = require('../package.json');
import { program } from 'commander';
import * as plot from './plot';



program
  .version(packageJson.version)
  .command('gen')
  .action((cmd) => {
    const command: string = cmd.args[0];
    switch (command) {
      case 'gen':
        const output = JSON.stringify(plot.generatePlot(), null, '    ');
        console.log(output);
        break;
      default:
        break;
    }
  })
  .parse(process.argv);
