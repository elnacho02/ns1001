// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}
BinarySearchTree.prototype.insert = function(value){
  if(value>this.value){
    if(!this.right) this.right = new BinarySearchTree(value);
    else this.right.insert(value);
  }else{
    if(!this.left) this.left = new BinarySearchTree(value);
    else this.left.insert(value);
  }
}
BinarySearchTree.prototype.contains = function(value){
  if(this.value === value) return true;
  if(value>this.value){
    if(!this.right) return false;
    else return this.right.contains(value);
  }else{
    if(!this.left) return false;
    else return this.left.contains(value);
  }

}
BinarySearchTree.prototype.size = function(){
  if(!this.right && !this.left)return 1;
  if(!this.left) return 1 + this.right.size();
  else if(!this.right) return 1 + this.left.size();
  return 1 + this.left.size() + this.right.size();
  
}
BinarySearchTree.prototype.depthFirstForEach = function(cb,order){
  //in-order
  if(!order || order ==="in-order"){
    if(this.left) this.left.depthFirstForEach(cb,order);
    cb(this.value);
    if(this.right) this.right.depthFirstForEach(cb,order);
  }
  //pre-order
  else if(order === "pre-order"){
    cb(this.value);
    if(this.left) this.left.depthFirstForEach(cb,order);
    if(this.right) this.right.depthFirstForEach(cb,order);
  }else{
    if(this.left)  this.left.depthFirstForEach(cb,order);
    if(this.right)  this.right.depthFirstForEach(cb,order);
    cb(this.value);
  }
}
BinarySearchTree.prototype.breadthFirstForEach = function(cb,lista = []){
  cb(this.value)
  if(this.left) lista.push(this.left);
  if(this.right) lista.push(this.right);
  lista.length && lista.shift().breadthFirstForEach(cb,lista);
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
