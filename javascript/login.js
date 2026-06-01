const usersDatabase = [
{
    username: "andres",
    password: "123",
},
{
    username: "caro",
    password: "456",
},
{
    username: "mariana",
    password: "789",
},
];  
const usersTimeline = [
{
    username: "Estefany",
    timeline: "Me encata Javascript!",
},
{
    username: "Oscar",
    timeline: "Bebeloper es lo mejor!",
},
{
    username: "Mariana",
    timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©",
},
{
    username: "Andres",
    timeline: "Yo hoy no quiero trabajar",
},
];

const username = prompt("Ingresa tu nombre de usuario");
const password = prompt("Ingresa tu contraseña");

function usuarioExistente(username,password) {
    for (let i = 0; i < usersDatabase.length; i++) {
        if (usersDatabase[i].username === username && usersDatabase[i].password === password) {
            return true;
        break;
    
        }return false;
        
    }
}

signIn(usuario, password) {
    if(usuarioExistente(username, password)){
        alert('Bienvenido a tu cuenta ${username}' );
        console.log(usersTimeline)
    }else {
        alert("ups, usuarion o contraseña incorrectos")
    
    }
}
signIn(username, password);

