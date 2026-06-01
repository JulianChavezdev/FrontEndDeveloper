/*
    Distintos verbos en HTTP
    GET: Cuando queremos obtener informacion.
    POST: toma la informacion y la comparte.
    PATCH Y PUT : Actualiza informacin que ya existe.
    DELETE: Borra información.
 */

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data));

