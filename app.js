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

    // agregar un elemento al final de la cola
    agregarElemento(item) {
        this.elementos.push(item);
    }

    // quitar y devolver el primer elemento de la cola
    quitarElemento() {
        return this.elementos.shift();
    }

    // obtener el tamaño de la cola
    longitud() {
        return this.elementos.length;
    }

    // mostrar como una cadena
    mostrarCola() {
        console.log(this.elementos.join(', '));
    }
}

// Función para dividir la cola original en dos colas según el índice de los elementos
function dividirCola(colaOriginal) {
    let cola1 = new Cola();
    let cola2 = new Cola();

    for (let i = 0; i < colaOriginal.longitud(); i++) {
        if (i % 2 === 0) { //Si 'i' es par (i % 2 === 0), el elemento se agrega a 'cola1'.
            cola1.agregarElemento(colaOriginal.elementos[i]);
        } else {
            cola2.agregarElemento(colaOriginal.elementos[i]);
        }
    }

    return { cola1, cola2 };
}

let colores = new Cola(["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"]);

console.log("Cola original:");
colores.mostrarCola();

let { cola1, cola2 } = dividirCola(colores);

console.log("Cola 1:");
cola1.mostrarCola();

console.log("Cola 2:");
cola2.mostrarCola();


//2.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. 
//Sin embargo, llegada la hora de inicio hay muchos “colados”, 
//es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. 
//Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
//Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.

console.log('Ejercicio 2.2');

class Fila {
    constructor (personas = []){
        this.personas = personas;
    }

    agregarPersona(persona){
        this.personas.push(persona);
    }

    removerPersona(){
        return this.personas.shift();
    }

    longitud(){
        return this.personas.length;
    }

    mostrarFila(){
        return this.personas.map(p => p.user).join(', ');
    }

    eliminarSinTicket(){
        let sinTicket = [];
        let size = this.longitud();

        for(let i = 0; i < size; i++){
            let persona = this.removerPersona();
            if (persona.ticket){
                this.agregarPersona(persona);
            } else {
                sinTicket.push(persona);
            }
        }
        return sinTicket;
    }
    
}

let fila = new Fila([
    { user: 'User1', ticket: true },
    { user: 'User2', ticket: true },
    { user: 'User3', ticket: false },
    { user: 'User4', ticket: true },
    { user: 'User5', ticket: false },
    { user: 'User6', ticket: false },
    { user: 'User7', ticket: true },
    { user: 'User8', ticket: true },
    { user: 'User9', ticket: true },
    { user: 'User10', ticket: false },
    { user: 'User11', ticket: true }
]);

// Mostrar la fila inicial
console.log("Fila inicial:");
console.log(fila.mostrarFila());

// Eliminar personas sin ticket
let sinTicket = fila.eliminarSinTicket();

// Mostrar las personas retiradas
console.log("Personas retiradas:");
console.log(sinTicket.map(p => p.user).join(', '));

// Mostrar la fila final
console.log("Fila final:");
console.log(fila.mostrarFila());