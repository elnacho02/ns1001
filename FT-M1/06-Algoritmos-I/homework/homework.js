// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var arr = [1];
  var div = 2;
  while(num!== 1){
    if(num%div===0){
      arr.push(div);
      num = num/div;
    }
    else div++;
  }
  return arr;

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var cambios = true;
  while(cambios){ 
    cambios = false;
    for(let i=0;i<array.length-1;i++){
      if(array[i]>array[i+1]){
        var aux = array[i];
        array[i]=array[i+1];
        array[i+1] = aux;
        cambios = true;    
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i=1;i<array.length;i++){ // 1 4 5 0
    for(let j = i-1; j>=0;j--){
      var aux = null;
      if(array[i]<array[j]){
        aux = array[j];
        array[j] = array[i];
        array[i] = aux;
        i--;
      }
    }
  }
  return array

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var arreglo = [];
  while(array.length){    
    var min = array[0];
    var j = 0;
    for(let i=0;i<array.length;i++){
      if(array[i]<min){
        min=array[i];
        j = i;
      }
    }
    arreglo.push(min);
    array.splice(j,1);
  }
  return arreglo;
}
//--SEGUNDA FORMA SELECTION--//
/* var arr = [];
for(let i=0; i<array.length;i++){
var aux = array[i];
var j2 = null;
var min = array[i];
  for(let j=i+1;j<array.length;j++){
    if(array[j]<min){
      aux = array[j];
      j2 = j;
      min = array[j];   
    }
  }
array[j2] = array[i]
array[i] = aux;

arr.push(array[i])
}
return arr; */



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
