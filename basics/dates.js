let d=new Date();
console.log(d);
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toISOString());
console.log(d.toLocaleString());
console.log(d.toLocaleTimeString());
console.log(typeof(d));
let mycreateddate=new Date(2023,0,24);   //month start from january
console.log(mycreateddate.toDateString());
let mycreatdate2=new Date(2023,0,24,5,3); 
console.log(mycreatdate2.toLocaleString());    //MM/DD/YY is much followed.
console.log(Math.floor(Date.now()/1000));       //time in seconds it will give timestamp
let newdate=new Date(2024,9,7);   //YY/MM/DD
console.log(newdate.getDate());
console.log(newdate.getMonth());
newdate.toLocaleString('default',{
    weekday:"long"     //to modify localestring we can add more parameters
})

 
