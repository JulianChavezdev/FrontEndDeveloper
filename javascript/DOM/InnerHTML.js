
//INNERHTML, INSERTADJACENTHTML, CREATE ELEMENT Y REMOVE, CLONE NODE Y REPLACEWITH



// Obtenemos el elemento del DOM con el id "contentArea" y lo almacenamos en la variable 'contentArea'
const contentArea = document.getElementById("contentArea");

// Usamos 'innerHTML' para reemplazar todo el contenido del elemento 'contentArea' con un nuevo párrafo
contentArea.innerHTML = `<p>este es un nuevo parrafo realizado desde js - innerHTML</p>`;

// Insertamos un nuevo párrafo al final del contenido actual de 'contentArea' usando 'insertAdjacentHTML' con "beforeend"
// "beforeend" inserta el contenido justo antes del cierre del elemento, es decir, al final del elemento
contentArea.insertAdjacentHTML("beforeend", `<p>este es un nuevo parrafo realizado desde js - insertAdjacentHTML - beforeend</p>`);

// "beforebegin" inserta el contenido antes de que comience el elemento, es decir, fuera del elemento y justo antes de él (miralo el html desde el navegador, estara fuera de section)
contentArea.insertAdjacentHTML("beforebegin", `<p>este es un nuevo parrafo realizado desde js - insertAdjacentHTML - beforebegin</p>`);

// "afterend" inserta el contenido después del cierre del elemento, es decir, fuera del elemento y justo después de él
contentArea.insertAdjacentHTML("afterend", `<p>este es un nuevo parrafo realizado desde js - insertAdjacentHTML - afterend</p>`);


// "afterbegin" inserta el contenido justo después de que comience el elemento, es decir, al inicio del elemento
contentArea.insertAdjacentHTML("afterbegin", `<p>este es un nuevo parrafo realizado desde js - insertAdjacentHTML - afterbegin</p>`);




/* MANIPULACIÓN DEL DOM SEGÚN EL COMPORTAMIENTO DEL USUARIO */

const contentArea = document.getElementById("contentArea");
console.log(contentArea);



//Agregar nuevos elementos sin modificar contenido existente
const listArea = document.getElementById("listArea");
console.log(listArea);

//Agrega nuevo contenido sin reemplazar el anterior. Sin embargo afecta al performance de la página porque rendereiza todo el contenedor padre otra vez
//listArea.innerHTML += "<li>Hello, i'm Any <3</li>";

//No afecta al performance, por lo cual es la mejor manera para agregar un elemento nuevo
listArea.insertAdjacentHTML("beforeend", "<li>Soy un nuevo elemento</li>");




//CREATE ELEMENT

// Crear un nuevo elemento <p> y agregarle texto
const newPElement = document.createElement(`p`);
newPElement.textContent = `Fuí creado con Create Element`;

// Seleccionamos 'contentArea' y agregamos el nuevo <p> al final
const contentArea = document.getElementById(`contentArea`);
contentArea.append(newPElement);  // Se añade como último hijo

// Seleccionamos 'listArea' para trabajar con la lista
const listArea = document.getElementById(`listArea`);

// 'prepend' agrega el nuevo <li> al principio de la lista
const newItem = document.createElement(`li`);
newItem.textContent = `Item 5 - prepend`;
listArea.prepend(newItem);  // Se añade como primer hijo

// 'before' inserta el nuevo <li> antes de 'listArea' (fuera de la lista)
const newItem2 = document.createElement(`li`);
newItem2.textContent = `Item 6 - before`;
listArea.before(newItem2);  // Se añade justo antes de la lista

// 'after' inserta el nuevo <li> después de 'listArea' (fuera de la lista)
const newItem3 = document.createElement(`li`);
newItem3.textContent = `Item 7 - after`;
listArea.after(newItem3);  // Se añade justo después de la lista


//REMOVE 


// Seleccionamos el primer <li> con querySelector y lo mostramos en consola (ITEM 1)
const firstItem = document.querySelector(`li`);
console.log(firstItem);  // Muestra: <li>Item 1</li>

// Eliminamos el primer <li> directamente usando el método remove()
firstItem.remove();  // Elimina el <li> que se seleccionó

// Seleccionamos la lista <ul> y eliminamos su primer hijo usando removeChild
const list = document.querySelector(`ul`);
list.removeChild(list.firstElementChild);  // Elimina el primer <li> dentro de la <ul>

// - firstElementChild: Selecciona y elimina el primer hijo de tipo elemento
// - lastElementChild: Selecciona y elimina el último hijo de tipo elemento
// - childNodes[index]: Selecciona y elimina un hijo específico por su índice
// - querySelector: También se puede usar para seleccionar un hijo específico y eliminarlo



// Seleccionamos el área de contenido y el primer <p> dentro de él
const contentArea = document.querySelector(`#contentArea`);
const originalP = contentArea.querySelector(`p`);

// Clonamos el párrafo original con cloneNode(true) para copiar el nodo y todos sus hijos
// El parámetro 'true' significa que se clonan también los nodos hijos (profundidad)
const clonedP = originalP.cloneNode(true);

// Agregamos el párrafo clonado al final del área de contenido
contentArea.append(clonedP);

// Modificamos el texto del párrafo clonado
clonedP.textContent = `podemos reemplazar el texto`;

// Seleccionamos la lista y el tercer <li> dentro de ella (índice 2)
const listArea = document.getElementById(`listArea`);
const itemToReplace = listArea.children[2];  // Tercer <li> en la lista

// Reemplazamos el tercer <li> con el párrafo clonado
// 'replaceWith()' elimina el nodo seleccionado (itemToReplace) y lo sustituye por el nuevo nodo (clonedP)
// Este método es útil para cambiar un elemento existente por otro sin necesidad de buscar su padre
itemToReplace.replaceWith(clonedP);  // El <li> es reemplazado por el nuevo <p>