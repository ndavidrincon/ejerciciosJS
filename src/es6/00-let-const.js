var lastName = "david"; // declararando variable y asignaondo 
lastName = " Oscar" // reasignar valor a la variable declarada
console.log(lastName);

let fruit = "Apple";
fruit = "kiwi";
console.log(fruit);

const animal = "dog";
animal = "cat";
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = "Apple"; // function scope
        let fruit2 = "kiwi"; // block scope
        const fruit3 = "banana"; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits() // cuando la ejecuto me arroja error a partir la la variable let, puesto que segun scope no puedo usar esas variables fuera de la funcion
