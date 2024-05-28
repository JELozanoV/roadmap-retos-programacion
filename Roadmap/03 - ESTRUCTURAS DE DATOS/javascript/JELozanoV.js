/*
 * EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar, y a continuación
 *   los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más de 11 dígitos.
 *   (o el número de dígitos que quieras)
 * - También se debe proponer una operación de finalización del programa.
 */

// Arrays

// Arrays simples

let numeros = [1,2,4,5,6]
let frutas = ["Manzana","pera","Naranja"]

// Arays multidimensionales 

let arrNumeros = [
    [1,2,3,4,5]
    [5,4,3,2,1]
]

//Arrays Dispersos

let numerosDispersos = []
numerosDispersos[10] = 30 // Los 10 indices anteriores a el 10 estaran vacios 

// Operadores de insercion en arrays 

numeros.push(7,8) // Añade uno o mas elementos al final del array
numeros.unshift(-2,-1,0) // Añade uno o mas elementos al inicio del arreglo

// Splice

numeros.splice(2, 0, 3, 4); // Sintaxis array.splice(indice, numeroDeElementosAEliminar, elemento1, ..., elementoN)

// Spread operator 

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let combinado = [...array1, ...array2]; // Spread operator descompone el array y combina los arrays

//Borrado 

// Pop 

let numeros2 = [1, 2, 3, 4, 5];
let eliminado = numeros.pop(); // Elimina el último elemento de un array y lo devuelve
console.log(numeros); // [1, 2, 3, 4]
console.log(eliminado); // 5

// shift

let numeros3 = [1, 2, 3, 4, 5];
let eliminado2 = numeros.shift(); // Elimina el primer elemento de un array y lo devuelve
console.log(numeros); // [2, 3, 4, 5]
console.log(eliminado); // 1

// delete Operator

let numeros4 = [1, 2, 3, 4, 5];
delete numeros[2]; // Elimina el elemento en el índice 2
console.log(numeros); // [1, 2, undefined, 4, 5]

// slice 

let frutas2 = ['manzana', 'banana', 'cereza', 'durazno', 'kiwi'];

// Usar slice() para obtener una porción del array
let algunasFrutas = frutas.slice(1, 4);

console.log(algunasFrutas); // ['banana', 'cereza', 'durazno']
console.log(frutas); // ['manzana', 'banana', 'cereza', 'durazno', 'kiwi']

//Actualizacion

frutas2[3] = "fruta actualizada"

//Ordenar 

frutas2.sort()
console.log(frutas2);
// Objetos 

let persona = {
    nombre:"Juan",
    edad: 30
}

// Crear un set
let conjunto = new Set([1, 2, 3, 4, 5]);
console.log(conjunto);
// Agregar un valor al set
conjunto.add(6);

// Verificar si un valor está en el set
console.log(conjunto.has(3)); // true

// Eliminar un valor del set
conjunto.delete(4);

