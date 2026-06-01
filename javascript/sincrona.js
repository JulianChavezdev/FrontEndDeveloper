/* Existen distintos estados
 Promise()
 pending
 fullfilled
 rejected
 
 y tambien existen distintos callbacks:
 resolve
 reject

 then()
 catch(cuando la promesa no se resuelve)
 */

 const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operationSuccesful = true;
        if (operationSuccesful){
        resolve("Operacion exitosa");
        } else {
        reject("Operacion fallida");
        }
    }, 2000);
});

promise
    .then((successMessage) => console.log(successMessage))
    .catch((errorMessage) => console.log(errorMessage));