//Named Functions
//Function is used to call a particular statement inside a block.
//Functions are like methods in Java


/* function funName(){

console.log("Hello Team wELCOME");
}
funName() */

//call a function to execute the code inside the function block

/* function funName(){
let a=10;
let b=20;
let c=a+b
console.log(c);

}
funName() */

//calling a function by passing arguements

/* function subtraction(x, y){ //need not declare the type of the vairable here unlike java
    let z= x-y;
    console.log(z)
}
subtraction(99,60) */

//call a function to execute the code inside the function block/scope and return the value.

function subtraction(x, y){ //need not declare the type of the vairable here unlike java
    let z= x-y;
    return z
}
console.log(subtraction(99,60))
