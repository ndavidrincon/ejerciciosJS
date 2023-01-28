// las promesas son una de las maneras de trabajar el asincronismo en js y se presenta como un objeto que puede generar un valor único a futuro, que tiene dos estados o está resulta o incluye una razon por la cual no ha sido resuelta la solicitud.
// era una solucion para trabajar con los call backs y consistia en un funcion que recibia como parametro otra funcion y la ejecuto segun sea el caso.
// las promesas es algo que va a pasar hoy mañana o nunca

// Solamente ten presente que la clase Promise y sus métodos then y catch fueron añadidos en ES6. Esto resuelve un problema del manejo del asincronismo con callbacks, llamado Callback Hell.

// el argumento de la clase Promise es una funcio que recibe dos parametros: 
// resolve: cuando la promesa es resuelta.
// reject: cuando la promeza es rechazada.

// puedes utilizar cualquier nombre, siempre y cuando sepas su funcionamiento.

const anotherFunction = () => {
    return new Promise((resolve, reject) =>{
        if (false) { // con tru aseguramos que el primer bloque que estemos pasando es el que va a suceder
            resolve("hey!"); // aca se puede pasar un valor numerico o un objeto, o lo que va a resolver segun sea nuestra logica
        } else {
            reject ("no funciona como esperaba");
        }
    })
}

anotherFunction ()
    .then(response => console.log(response)) // then es un metodo de la promesa que retorna anotherFuction y por ser un metodo se llama o ejecuta y recibe parametros en este caso un callback, nos va a retornarnos un response si no llega a resolverse la promesa pasamos a catch, se podría tener mas de un them  
    .catch(err => console.log(err));