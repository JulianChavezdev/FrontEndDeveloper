//Buscar al padre, en este caso una etiqueta UL
const parent = document.getElementById("parent");
console.log("parent");

//Buscar a los hijos de UL, los LI
const children = parent.children;
console.log(children);

//Trae un objeto con todos los nodos de los HIJOS del elemento PADRE, incluidos los saltos de línea, a los que se les denomina #text
const childNodes = parent.childNodes;
console.log(childNodes);

//Sirve para traer el primer nodo del primer HIJO LI
const children2 = parent.firstChild;
console.log(children2);

//Llegar al PRIMER HIJO
const firstChild = parent.firstElementChild;
console.log(firstChild);

//Trae al ÚLTIMO nodo de los HIJOS del elemento PADRE
const lastChild2 = parent.lastChild;
console.log(lastChild2);

//Legar al ÚLTIMO HIJO
const lastChild = parent.lastElementChild;
console.log(lastChild);
```También les dejo los métodos para **navegar entre elementos hermanos:```

//Trae al nodo anterior del elemento HERMANO del padre
const previousSibling2 = parent.previousSibling;
console.log(previousSibling2);

//Legar al elemento ANTES del padre, es decir,su hermano
const previousSibling = parent.previousElementSibling;
console.log(previousSibling);

//Llegar al nodo del elemento HERMANO, es decir, DESPUÉS del padre
const nextSibling2 = parent.nextSibling;
console.log(nextSibling2);

//Llegar al elemento DESPUÉS del padre, es decir, también su hermano pero después de este
const nextSibling = parent.nextElementSibling;
console.log(nextSibling);





