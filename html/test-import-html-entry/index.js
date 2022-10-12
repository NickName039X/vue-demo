
// import importHTML from 'import-html-entry/esm/index.js';
var importHTML = require('import-html-entry')
importHTML('./index.html')
    .then(res => {
        // console.log(res.template);

        res.execScripts().then(exports => {
            // const mobx = exports;
            // console.log(123);
            // const { observable } = mobx;
            // observable({
            //     name: 'kuitos'
            // })
        })
    });