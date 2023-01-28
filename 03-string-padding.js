// Es un método que permite rellenar la cadena actual con una cadena dada. El relleno es aplicado desde el inicio de la cadena actual.
// y el numero que le pasamos al primer argumento lo que hace es especificar con cuantos caracteres va a quedar el string, si el numero de caracteres del estring a modificar es igual al numero que pasamos como argumento en el metodo padStart no, agregara nada, si es mayor agregara el string pasado como argumento en el argumento el numero de veces que haga falta.

// patEnd funciona igual, sino que lo que agrega es al final del estring a modificar.

const string = "hello";

console.log(string.padStart(7, "hi"));

console.log(string.padEnd(7, "_"));


