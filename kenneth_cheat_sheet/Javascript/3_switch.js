// testing switch statments

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

x = prompt("Choose 1 or 2: ");
switch(x){
    case "1" : 
        console.log("You choose 1 yiipii! ");
        break;

    case "2" : 
        console.log("You choose 2 wooohoo! ");
        break;

    default: console.log("wrong button, restart program")
  };


/*
///////////////////Example from README//////////////////////

x = 2;                                        // x is 2
  switch(x){                                  // checks what x is
      case 1 : console.log("wheey")           // writes wheey in terminal if x is 1
      break;                                  // turns of switch statment after console.log
      case 2 : console.log("perfect")         // writes perfect in terminal if x is 2
      break;                                  // turns of switch statment after console.log
  default : console.log("not in the menu!")   // if user choice is not in the case list
  }
  // --> perfect
*/