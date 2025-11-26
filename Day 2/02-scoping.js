//ar is function scope
//var companyName = "Accenture" //Global declaration
/*
if (true) {
    var companyName="Accenture"
    console.log("Accessing var inside the if block",companyName);
}
    //let
if (true) {
    let companyCode =124
    console.log("Accessing let inside the if block",companyCode);
}
    console.log("Accessing let outside the if block",companyCode);
*/

    //same with the same of const

    //function scoped:
    //var is function scoped

    function greet(){
        var message="Hello Team"
        console.log("Accessing the var inside function scope",message);//inside function

        if (true) {
    //console.log("Accessing var inside the if block",message);//inside if block
}
    }
    console.log("Accessing var outside the function",message);
    greet()

    //same is for let and const 

