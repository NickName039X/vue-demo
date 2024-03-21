/* eslint-disable */
const inquirer = require('inquirer');
const choices = [
    {
      name: '使用【开发环境】开发',
      value: 'dev'
    },
    {
      name: '使用【测试环境】开发',
      value: 'dev.test'
    },
    {
      name: '使用【预发布环境】开发',
      value: 'dev.pre'
    },
    {
      name: '输入后端同事IP共同联调',
      value: 'custom'
    },
    {
      name: '打包【开发环境】前端包',
      value: 'build:dev'
    },
    {
      name: '打包【测试环境】前端包',
      value: 'build:test'
    },
    {
      name: '打包【预发布环境】前端包',
      value: 'build:pre'
    },
    {
      name: '打包【生产环境】前端包',
      value: 'build:prod'
    },
]
choices.unshift(new inquirer.Separator())
inquirer
    .prompt([
        {
            name: 'type',
            type: 'list',
            message: '新门户项目：',
            choices:choices,
            pageSize: choices.length,
        },
    ])
    .then((answers) => {
        console.log('answers', answers);
        // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });