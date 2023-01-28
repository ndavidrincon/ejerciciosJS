class User {};
// const nerUser = new User(); // Aca creamos una instancia de una clase

class user {
    // metodos 
    greething() {
        return "Hello";
    }
};

const intanciaDeUser = new user ();
console.log(intanciaDeUser.greething());
const otraInstancia = new user();
console.log(otraInstancia.greething()); // las instancias heredan los atributos y metosos de su clase padre  

// Constructor  

class user {
    constructor() {
        console.log("nuevo usuario");
    }
    greething() {
        return "hello";
    }
}

const david = new user();

// This // hace referencia del elemento padre que lo contiene.

class user {
    constructor (name) {
        this.name = name;
    }
    speak(){
        return "hello";
    }
    greething() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user ("ana");
console.log(ana.greething());

// setters and getters

class user {
    constructor (name, ege) {
        this.name = name;
        this.ege = ege;
    }
    speak(){
        return "hello";
    }
    greething() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge (){
        return this.ege;
    }
    set uAge (n){
        this.ege = n;
    }
}

const bebeloper1 = new user ("david", 25);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);