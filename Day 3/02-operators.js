//compound Assignment operator

let x=10;
x+=5;//what this means x=x+5; 10+5 =15
console.log(x)

let y=20
y-=15;// y-15=5
console.log(y);

let z=6;
z*=5;
console.log(z);

//Post Increment Value ++ --> value +1
let a=10;
console.log(a++);
console.log(a);

//pre increment ++value
let b=6;
console.log(++b);

//Post Decrement value value--
let c=100;
console.log(c--);
console.log(c);

//Pre decrement --value
let d=100;
console.log(--d);


//Compare the value and not the datatype

console.log(1==1);//true 
console.log(1==="1");//false
console.log("1"==1);//true because of loose equality also datatype gets converted from string 1 to number datatype

console.log(1==true)
console.log(1===true);
