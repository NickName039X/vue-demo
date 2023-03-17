const dotenv = require('dotenv');
const path = require('path');
// require('dotenv').config() // 读dotenv的配置
// console.log(process.env) // remove this after you've confirmed it is working

let envfile = `.env.build.dongguan`;
const result = dotenv.config({
  path: path.resolve(`envs`, envfile)
});
console.log(result);
