// enahced object Literals 

function newUser (user, ege, country) {
    return {
        user: user,
        ege: ege,
        country: country
    }
} // antes se hacia de esta forma en ECMAScript 5

// cuando el nombre que va a retornar el objeto tiene el mismo valor, no es necesario ponerle el valor a la key. de la siguiente forma.
function newUser (user, ege, country, UId) {
    return {
        user,
        ege,
        country,
        id: UId
    }
}

console.log(newUser("carlos", 25, "peru", 1));

// tener en cuenta que debemos pasar por argumento la misma cantidad y en el mismo orden que estan como parametros en la funcion llamada.

