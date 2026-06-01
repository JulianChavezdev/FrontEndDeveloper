//TIPO ENTERO Y DECIMAL (NUMBER)

const entero = 42;
const decimal = 3.14;

//notacion cientifica
const cientifica = 1.5e3; //1500

//numeros infinitos y NaN

const infinito = Infinity;
const noEsunNumero = NaN;

//Operaciones aritmeticas
//suma, resta, multiplicacion, division

const suma = entero + decimal;
const resta = entero - decimal;
const multiplicacion = entero * decimal;
const division = entero / decimal;

//modulo y exponenciacion

const modulo = entero % 5; //resto de la division
const exponenciacion = decimal ** 2; //decimal elevado a la 2

// Precicision

const numeroPreciso = 0.1 + 0.2; //0.30000000000000004
//console.log(numeroPreciso.toFixed(2)); //redondear a 2 decimales
// == 0.30

//operaciones avanzadas con Math

const raizCuadrada = Math.sqrt(16); //4
const valorAbsoluto = Math.abs(-10); //10
const numeroAleatorio = Math.random(); //numero aleatorio entre 0 y 1Ñ

