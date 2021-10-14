let n=parseInt(prompt("Enter number"));
let m=parseInt(prompt("Enter number"));

if(!Number.isInteger(n)||!Number.isInteger(m)) {
  alert("Try again")
}else
 {
const skipPairs=confirm ("skip Pairs?");
document.location.reload()
const result=null;
for(const i=n;i<=m;++i){
  if(skipPairs && !(i%2)){
    continue;
   }
   result+=1;

};
alert(result);
}