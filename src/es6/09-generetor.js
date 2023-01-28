// generetor es un tipo de funcion que nos va a dar un algoritmo definido 
// para identificarla debemos poner un * al final de function
// yield es una palabra reservada la cual retornara cada vez que lo necesitamos
function* iterate (array) {
    for(let value of array) {
        yield value
    }
}

// el .next es un metodo que se crea dentro de nuestro generator que lo que hace en este caso es imprimir una sola vez el primer elemento y si se vuelve a llamar imprime el siguiente elemento y asi sucesivamente en caso de que ya se acaben los elementos del array entonces va a impprimir undefined porque no hay mas elementos que imprimir
// lo que hacemos es iterar por cada uno de los elemetos del array y los regresamos por el yield
const it = iterate (["oscar", "juan", "anna", "rex"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
