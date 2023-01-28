// asignacion de desestructuracion

// Entonces la destructuracion en arreglos
// es construir una variable con el numero de letras igual al numero de elementos dentro del array, y lo igualmaos al numbre del array. ahora puedo mostrar cualquiera de los elementos del array imprimiendo la letra.
let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, fruits[1]);
console.log(a, b);
console.log(b);

// destructuracion en objetos
let user = {username: "oscar", ege:34};
let {username, age} = user;
console.log(username, user.ege);
console.log(username, ege); // cualquiera de los dos, console.log nos dan el mismo resultado.

// la destructuracion conviene usarla en caso de que ya sepamos que necesitamos un elemento especifico de un array, si lo elementos se estan generando de forma dinamica capaz no es tan util.


// Spreed operator 

let person = {name: "oscar", ege: 28};
let country = "mx";

let data = { id:1, ...person, country}; // lo que hacen los tres puntos es que realiza la destructuracion del obtjeto person, como podemos ver si queremos tambien podemos agregar mas elementos al mismo objeto
console.log(data);


// rest parameter

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(1, 1, 2, 3)

// Una diferencia importante de ambos parámetros, como dice la documentación, es que el spread syntax (…), lo que hace es desestructurar elementos de un objeto o array.
// Sin embargo lo que hace la rest syntax (… pero usada como parámetro en una función), es “empaquetar” o “condensar” los valores enviados como un elemento, sea array u objeto.

// Spread syntax: desestructura -> deconstruye
// Rest syntax: empaqueta -> construye