// Obtenemos el elemento del DOM con el id "app-title" usando querySelector y lo almacenamos en la variable 'titulo'

const titulo = document.querySelector("#app-title");

// Mostramos todas las propiedades y métodos del elemento 'titulo' en la consola usando 'console.dir()'

console.dir(titulo);

// Modificamos el texto dentro del elemento 'titulo' usando 'textContent' y lo cambiamos a "Nuevo Titulo"
// 'textContent' establece o devuelve el contenido textual de un nodo, incluyendo el contenido de sus hijos

console.dir(titulo.textContent = "Nuevo Tituto");

// Usamos 'innerText' para cambiar el contenido textual a "Este es otro titulo"
// 'innerText' solo devuelve o establece el contenido visible del elemento, sin incluir los nodos ocultos o con CSS 'display: none'

titulo.innerText = "Este es otro titulo";