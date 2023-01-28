const list = new Set();

list.add("item 1");
list.add("item 2").add("item 3");

console.log(list);

// 1. Se realiza la conversión de Array a Set. Set es una estructura que no admite elementos repetidos. Por lo tanto, tenemos un Set con los elementos del array sin repetidos.
// 2. Como tenemos una estructura Set, debemos convertirlo a Array.
// 3. El operador de propagación, como su nombre lo indica, propaga los elementos de un iterable en otro iterable. Los Sets son iterables como los Arrays, por lo que sus elementos pueden propagarse dentro de un iterable array [... new Set(array)]. Lo que se asemeja a propagar los elementos de un array dentro de otro array.

const array = [1, 1, 2, 2, 3, 4, 4, 5]

// 1. Convertir de Array a Set
const set = new Set(array) // Set(5) {1, 2, 3, 4, 5}
// 2. Convertir de Set a Array
const arraySinRep = Array.from(set) // [1, 2, 3, 4, 5]
// 3. Propagar los elementos del Array dentro de otro Array
const sinRepetidos = [ ...arraySinRep] // [1, 2, 3, 4, 5]