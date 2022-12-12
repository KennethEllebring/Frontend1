// testing if statments

////////////////////////////////////////////////////////
//                                                    //
//                  IMPORTANT!!!                      //
//   To run program you need to install a library,    //
//             type in the terminal:                  //
//                                                    //                  
//            npm install prompt-sync                 //
//                                                    //  
//   This creates a control file that lets you use    //  
//   command: prompt-sync, which let you input data   //
//          in the terminal to the program            //
//                                                    //
////////////////////////////////////////////////////////

const prompt = require('prompt-sync')()

x = parseInt(prompt("Choose 1 or 2: "));
    if(x === 1){
        console.log("Nice choice!");
        }  else if(x === 2){
                console.log("Better choice!!");
                }  else{
                    console.log("to bad!");
};

/*
///////////////////Example from README//////////////////////
x = 1;                                      // x is 1
if(x == 1){                                 // checks if x is 1  
    console.log("number 1");                // prints number 1 to terminal
}   else{                                   // if x was something else
        console.log("another number");      // it prints another number in terminal
    }
// --> number 1
*/