let num = 7;
let count = 1;
for(let i = 1;i <=num;i++){
if(num%i==1){
count++
}
}
if(count ==2){
console.log("Prime Number")
}
else{
console.log("Not a Prime Number");
}