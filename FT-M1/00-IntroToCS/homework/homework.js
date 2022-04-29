function BinarioADecimal(num) {
  // tu codigo aca
    let num1 = num.toString();
    let expo = 0;
    let suma = 0;
    
    //101
    for(let i=num1.length-1;i>=0;i--){
        if(num1[i]==1){
            suma += 2**expo;
        }
        expo++;
    }
    return suma
}

console.log(BinarioADecimal(101))






function DecimalABinario(num) {
  // tu codigo aca
  /* return num.toString(2) */
  //1
  let suma = [1,0,1];
  while(num>0){
      suma = num%2 + suma;
      num = Math.floor(num/2);
  }
  return suma
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
