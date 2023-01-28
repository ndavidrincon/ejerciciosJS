// 

// creamos una funcion arrow dentro de una constante
// dentro me retornará una nueva promesa con los nuevos elemetos resolve y reject (recordemos que resolve se ejecuta en caso de que la promesa sea verdadera y reject como si fuese un else se ejecuta en caso de que la promesa sea falsa)
// tenenmos el return de new Promise y dentro la arrow function anonima
// if ternario es un concepto en donde usamos la sintaxis de if y else sin ponerlos explicitamente dentro del codigo.
// setTimeout establece un temporizador que ejecuta una función o una porción de código después de que transcurre un tiempo establecido.
// se ponen los : para hacer referencia a ese else
// tener en cuenta que el bloque de codigo se debe ejecutar completo sin importar que es lo que pasa en la promesa.


const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("AsynC!!"), 20000)
            : reject (new Error("Error!")); 
    })
}
const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log("hello!");
}

console.log("Before");
anotherFn();
console.log("After");



// Cómo utilizar funciones asíncronas
// La función asíncrona se crea mediante la palabra reservada async y retorna una promesa.

// async function asyncFunction () {...}

// const asyncFunction = async () => { ... } 

// La palabra reservada await significa que espera hasta que una promesa sea resuelta y solo funciona dentro de una función asíncrona. Los bloques try / catch sirven para manejar si la promesa ha sido resuelta o rechazada.

async function asyncFunction () {
  try {
    const response = await promesa()
    return response
  } catch (error) {
    return error
  }
}
// ¿Cuál es la mejor forma de manejar promesas, then o async / await? Ambas son muy útiles, manejar ambas te hará un mejor desarrollador.