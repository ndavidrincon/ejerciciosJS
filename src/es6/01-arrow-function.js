// funcion normal 
function squiere(num) {
    return num * num;
};

// arrow function
const square = (num) => {
    return num * num;
};

// arrow function con el return implicito
// la const square2 es igual al argumento (1 argumento) arrow function argumento * si mismo
// de esta forma podemos dejar de usar los parentesis del argumento, los corchetes y la palabra reservada return
// IMPORTANTE es necesario saber que si se requieren multiples lineas de codigo para una logica mas compleja se deben usar los parentesis, corchetes y la return
const square2 = num => num * num;