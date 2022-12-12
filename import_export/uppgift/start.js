// start.js
const prompt = require('prompt-sync')()
                                                                // activate package.json file: --> npm init -y
require('babel-register')({                                     // install babel register: --> npm install babel-register babel-preset-env --save-dev
    presets: ['env']
});

const { test } = require('./app4');                              // import data from app4.js
let x = prompt('välj ett program\n1 - Första lektionen\n2 - Andra lektionen\n3 - Tredje lektionen\n4 - Fjärde lektionen \n--> '); // prompt text
// module.exports = require('./app'+x+'.js')                     // invaliderar switch sats funkar dock bara om alla filer heter appX.js

switch(x){                                                       // switch expression with diffrent cases depending on input x from prompt
    case "1": console.log('du valde 1') 
    module.exports = require('./app1/app.js')                    // module exports getting info from ./folder/.js file
    break;
    
    case "2": console.log("du valde 2")
    module.exports = require('./app2.js')                        // module exports getting info from ./js file in same directory
    break;

    case "3": console.log("du valde 3")
    module.exports = require('./app3.js')                        // module exports getting info from ./js file in same directory
    break;
    
    case "4": console.log("du valde 4")
    console.log(test(20, 5))                                    // gets import info from function "test" in app4.js and require it on line 8 
    break;
}

