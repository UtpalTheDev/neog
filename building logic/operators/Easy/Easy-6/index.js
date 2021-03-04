
const read=require('readline-sync');

let inputmonth=read.question('Enter month\n');
inputmonth=inputmonth.toLowerCase();
let obj={
  january:31,
  march:31,
  may:31,
  july:31,
  august:31,
  october:31,
  december:31
}

let month=(input)=>{return((obj[input]!==undefined)?`have 31 days`:`not have 31 days`)};
month(inputmonth);