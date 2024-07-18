//1.- Se tiene una cola de colores y se tiene que dividir en dos colas, 
// respetando el orden y alternando a partir de su índice. Los pares en una y los nones en otra.
// Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
// Cola 1: [ amarillo, rojo, azul, morado]
// Cola 2: [rosa, verde, negro, blanco]

console.log('Ejercicio 2.1');

class Cola {
    constructor(elementos = []) {
        this.elementos = elementos;
    }

    // Método para agregar un elemento al final de la cola
    agregarElemento(item) {
        this.elementos.push(item);
    }

    // Método para quitar y devolver el primer elemento de la cola
    quitarElemento() {
        return this.elementos.shift();
    }

    // Método para obtener el tamaño de la cola
    longitud() {
        return this.elementos.length;
    }

    // Método para mostrar la cola como una cadena
    mostrarCola() {
        console.log(this.elementos.join(', '));
    }
}

// Función para dividir la cola original en dos colas según el índice de los elementos
function dividirCola(colaOriginal) {
    let cola1 = new Cola();
    let cola2 = new Cola();

    for (let i = 0; i < colaOriginal.longitud(); i++) {
        if (i % 2 === 0) {
            cola1.agregarElemento(colaOriginal.elementos[i]);
        } else {
            cola2.agregarElemento(colaOriginal.elementos[i]);
        }
    }

    return { cola1, cola2 };
}

// Ejemplo de uso
let colores = new Cola(["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"]);

console.log("Cola original:");
colores.mostrarCola();

let { cola1, cola2 } = dividirCola(colores);

console.log("Cola 1:");
cola1.mostrarCola();

console.log("Cola 2:");
cola2.mostrarCola();

