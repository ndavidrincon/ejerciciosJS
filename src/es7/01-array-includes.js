// Nos permite trabajar sobre un array y saber si esta ahí ese elemento que buscamos. 

// El metodo .includes nos permite pasar como argumento el valor que queremos buscar dentro del array, de esta manera, nos devuelve true si está y false sino.

// Tener en cuenta que este metodo es como si pusieramos las tres igualdades (===) lo cual quiere decir que el valor que le pasemos como argumento al metodo si o si debe ser igualito :D 


let numbers = [1,2,3,4,5,6,7,8,9];

console.log(numbers.includes(4));
console.log(numbers.includes(10));

const list = ["oscar", "juana", "daniela", "luz", "santi"];

console.log(list.includes("Santi"));
console.log(list.includes("santi"));

/// ////////////////////////// ////////////

// Includes, pero en objetos
// 🔗 En objetos también existen formas para saber si existe una propiedad. Estos son:

// La palabra reservada in
// El método de objetos hasOwnProperty
// El método Object.hasOwn, que recibe el objeto y la propiedad a evaluar.
const letras1 = { a: 1, b: 2, c: 3 }

"a" in letras1 // true
letras.hasOwnProperty("a") // true
Object.hasOwn(letras, "a") // true

// Se diferencian en que in evalúa todas las propiedades del objeto y del prototipo.

// El método hasOwnProperty evalúa solamente las propiedades del objeto. Sin embargo puede que colisione con alguna otra propiedad en el prototipo, por lo que la última versión de ECMAScript lanzó Object.hasOwn y se recomienda utilizar este si el navegador en el que trabajas lo soporta: Can I use?.

const letras = { a: 1, b: 2, c: 3 }

"toString" in letras // true
letras.hasOwnProperty("toString") // false
Object.hasOwn(letras, "toString") // false