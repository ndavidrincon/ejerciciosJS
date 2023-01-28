let hello = "Hello";
let world = "world";
let epicPhrace = hello + " " + world + "!";
console.log(epicPhrace);

// templats literals
// a esas comillas recostadas hacia un lado se les llaman comillas francesas
let epicPhrace2 = `${hello} ${world}!`;
console.log(epicPhrace2);

// Multi-line strings
let lorem = "esto es un strings \n " + "esto es otro string"; // de esta forma se realizaban saltos de lonea en el pasado

let lorem2 = `esta es una frace epica
esto es la continuacion de una frase epica.
`;

console.log(lorem);
console.log(lorem2);