##  Comments
```
    //              // Used to comment on a piece of kod on one row
    /* */           // Used if you want to comment many rows
```
##  Variables
```
    Remeber that variables are case sensitive, lower- and uppercase chars need to match!
    
    let test                    // Variable whit the name test, used when value needs to change
    const testTwo               // Variable whit the name testTwo, used when value needs to be constant and not change
    
    let test = 2;               // To declare test with the value of 2
    const testTwo = "carrot";   // To declare testTwo with the tring "carrot"

    "not used as frequently, use 'let' instead" 
    var                         // Legacy notation that is always mutable(changeble)
```
##  Strings
```
    Strings can be declared by using single and double quotation marks. ('' or "")
    
    Backticks are used to declare literal strings that can contain variables injected by 
    interpolation (`words ${variables} words`)
```
## Escape characters
```
    \'	single quote				// Used to modify strings of text
    \"	double quote                            ""
    \\	backslash                               ""
    \n	newline                                 ""
    \r	carriage return                         ""
    \t	tab                                     ""
    \b	word boundary                           ""
    \f	form feed                               ""
```
##  Integers och floats
```
    use parseInt(arg)       // Convert string to int // arg =  argument = variable // Returns NaN if input is not numerical
    use parseFloat(arg)     // Same but for decimals
    NaN                     // Short for "Not a Number"
    isNaN()                 // To check the results // give true or false as result
```
##  Functions

```
    function test(){            // A function with the name test(), write code inside curlybrackets and call
     }                              with test()
    name = name.toLowerCase()   // Makes a string lowercase
    .trim()                     // Removes spaces before and after string
    .lenght()                   // Counts all letters and spaces in a "string"
```
## Math in Javascript
```
    (1 + 1 = 2)                 // Addition             = Sum
    (2 - 1 = 1)                 // Substraktion         = Differance
    (1 * 2 = 2)                 // Multiplikation       = Product
    (2 / 2 = 1)                 // Divition             = Quotient
    (1++ = 2)                   // Increment(increase)  = +1
    (1-- = 0)                   // Decrement(decrease)  = -1
    (5 % 2 = 1)                 // Remainder            = Whats left after you divide a integer to nearest whole
    (variabel += 1)             // Puts together + and = so varibles become smaller
    (variabel -= 1)             // Puts together - and = so varibles become smaller
    (variabel *= 1)             // Puts together * and = so varibles become smaller	
    (variabel /= 1)             // Puts together / and = so varibles become smaller
```
##  Boolean (True or False)
```
    ==          // Compares if to values are the same(not always true 1 == "1" would also be true)
    ===         // Compares if two value are the same value and type
    !=          // Compares if to values are NOT the same(1 != "1" can still be true)
    !==         // Compares if two value are NOT the same value and type
    &&          // "AND" Compares if two or more parameters are the same at the same time
    ||          // "OR" Compares if one of two or more values are the same

    !!! eg. if (1 == "1") "Truey" - true but not true // use === if you want if (1 === "1") to be false !!!
```
## If and switch
```
    if/else and switch/case statements takes a input value and compare it to diffrent conditions for example
```
### if
```
    x = 1;                                      // x is 1
    if(x == 1){                                 // checks if x is 1  
        console.log("number 1");                // prints number 1 to terminal
    }   else{                                   // if x was something else
            console.log("another number");      // it prints another number in terminal
        }
    // --> number 1
```
### switch
```
  x = 2;                                      // x is 2
  switch(x){                                  // checks what x is
      case 1 : console.log("wheey")           // writes wheey in terminal if x is 1
      break;                                  // turns of switch statment after console.log
      case 2 : console.log("perfect")         // writes perfect in terminal if x is 2
      break;                                  // turns of switch statment after console.log
  default : console.log("not in the menu!")   // if user choice is not in the case list
  }
  // --> perfect
``` 
##  Array
```
    blubb = ["namnam" , 1]          // A array contains serveral pieces of info at the same time "string" and int 
    [["namnam", 1],["test", 2]]     // Multidimentsional or nested array more arrays inside the array
    console.log(blubb[0])           // Print the first value of the array to the console
    .push(["string", 3])            // Put another array at the END of an array
    .unshift()                      // Adds a value or array att the BEGINING of an array
    .pop()                          // Deletes the last value in an array
    .shift()                        // Deletes the first value in an array
```