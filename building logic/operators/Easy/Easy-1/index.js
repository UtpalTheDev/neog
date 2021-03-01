
let num1=5;
let num2=13;
let num3=7;
let num4=21;
let num5=48;

let sum=(...rest)=>rest.reduce((total,num)=>total+num,0);
sum(num1,num2,num3,num4,num5);
