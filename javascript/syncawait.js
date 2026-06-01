/*Sync and Await
para promesas

fetch para APIS

y uso de for con funciones asincronas
*/

/*function fetchData(){
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}
    */

async function fetchData(){
    try {
        let response = await fetch('https://rickandmortyapi.com/api/character');
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error)
    }
}


const urls = [
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode"
]

async function fetchAllData(){
    try {
        for await (let url of urls) {
            let response = await fetch(url);
            let data = await response.json();
            console.log(data)
        }
    }catch(error){
        console.log(error);
    }
}