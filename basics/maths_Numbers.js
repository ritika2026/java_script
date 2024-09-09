const num=200;
console.log(num);             //it does not gaurantee the number datatype 
const n=new Number(400);     //it ensures that n is number only
console.log(n);
console.log(n.toString().length);
console.log(typeof(n));
console.log(n.toFixed(3));
const m=new Number(25.86)
console.log(m.toPrecision(2));
const x=new Number(10000000)
console.log(x.toLocaleString());    //it will give comma for better representation and readable
console.log(x.toLocaleString('en-IN'));   //it will represent in indian format
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

console.log(Math.abs(-48));
console.log(Math.ceil(8.6));
console.log(Math.floor(8.6));
console.log(Math.random());   //give values between 0-1
console.log((Math.random()*10)+1);    //gives value between 1 and 10





