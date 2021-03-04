let num1=8;
let num2=23;
let num3=17;

let bigone=(a,b,c)=>{
  if(a<b&&a<c){
    return `${a} is small`; 
  }
  else if(b<a&&b<c){
    return `${b} is small`;
  }
  else{
    return `${c} is small`;
  }

}
bigone(num1,num2,num3);