// var program = require('commander');

// program
//   .version('0.0.1')
//   .parse(process.argv);

  // examples/basic-usage.js
const cli = require('cac')()

cli.option('--type <type>', 'Choose a project type', {
  default: 'node',
})

const parsed = cli.parse()

console.log(JSON.stringify(parsed, null, 2))
