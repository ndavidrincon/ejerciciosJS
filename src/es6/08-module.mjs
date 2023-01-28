// En el archivo module lo que estoy haciendo es exportar la funcion y ac+a en el archivo 08-mole.js lo que voy a hacer es traermela

// si cuando vaya a llamar el archivo antes del slach le ponemos doble punto va a hacer referencia a las carpetas de atras

// para que pueda leer los modulos tenemos que agregar al paket json el type: "module"

// en caso de que no queramos modificar el paquete json podemos agregar la extension .mjs esta extension se debe agregar a los dos archivos involucrados. tanto el que importa como el que exporta.
import hello from "./module.mjs";

hello();





// // /////////////// // /////////////// // //
export default myFunction;
export {myFunction};

import myFunction from "./myFunction"
import {myFunction} from "./myFunction"
// Default se usa cuando solo devuelves un elemento y no quieres restringir el nombre.
// Export const restringe el nombre y ademas te permite devolver multiples funciones o constantes