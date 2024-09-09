//concatenation
let s1="hello"
let s2="ritika"
console.log(s1+s2);
//above way of concatenation is outdated hence we use below given method
console.log(`${s1} my name is ${s2} singh`);  //backticks are used not single quotes

//string can be declared as given below way too
const name= new  String("ritika") 
console.log(name);
console.log(name.toUpperCase());
console.log(name.indexOf('t'));
console.log(name.charAt(3));
console.log(name.substring(0,4)); //it will return the substring from and to given index 
console.log(name.slice(-1,3));   //in slice method of string negative numbers can be given too it will remove the given index
//trim is used to trim white spaces
const sub=new String("     javascript             ")
console.log(sub);
console.log(sub.trim());
console.log(name.replace('t','r'));
console.log(name.includes('ritu'));
console.log(name.split('--'));
console.log(name.endsWith('a'));





