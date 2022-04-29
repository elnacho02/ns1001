// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;
  
  var pivot = [array[0]];
  var left = [];
  var right = [];
  for(let i=1; i < array.length; i++){
    if(array[i]<pivot)left.push(array[i]);
    else right.push(array[i]);
  }
  
  return quickSort(left).concat(pivot).concat(quickSort(right))
}
function merge(left,right){
  var result = [];
  var leftIndex = 0;
  var rightIndex = 0;
  while(left.length > leftIndex && right.length>rightIndex){
    if(left[leftIndex]<right[rightIndex]){
      result.push(left[leftIndex]);
      leftIndex++
    }else{
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length<=1)return array;
  var midPos = Math.floor(array.length/2);
  var left = array.slice(0,midPos);
  var right = array.slice(midPos);
  return merge(mergeSort(left),(mergeSort(right)))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
