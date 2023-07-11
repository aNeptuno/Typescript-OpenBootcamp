// Console Log
console.log(`Hola`);

let lista = ["Uno","Dos","Tres"];

lista.forEach((_)=>console.log);

let nombre = "Alex";
console.log(`Hola ${nombre}`);

//Console Clear
console.clear();

//Console Assert
var foo:number = 100;
console.assert(foo===1000, "Mensaje", `Otro mensaje: ${foo}`);

//Console Count
function contador(texto:string){
    console.count(texto);
}

contador("Hola"); //1
contador("Chau"); //2
contador("Hola"); //2

console.countReset(); //Resetear el contador


//Console Info, Warn o Error
console.info("Texto informativo");
console.warn("Texto de aviso");
console.error("Texto de error");

//Console Trace

function uno(){
    dos()
}

function dos(){
    tres()
}

function tres(){
    console.trace(); //Trazar por donde se ha ido ejecutando el código para llegar a este sitio
}

uno(); //Inicia el trace por consola.

// Console Dir --> Mostrar valores de objetos

let coche = {
    nombre:"Audi",
    matricula:"23423423",
    especificaciones:[
        {
            motor: "w12",
            potencia: "300CV"
        }
    ]
}

console.dir(coche);

// Console Table --> Mostrar objetos en listas o tablas
console.table(coche);

//Console Time --> Contabilizar el tiempo de ejecución

function espera(){
    for (let index = 0; index < 100; index++) {
        //...  
    }
}

console.time("Prueba"); //Inicia el cronómetro
espera();
console.timeEnd("Prueba"); // Terminar y contabilizar el tiempo que ha pasado 

// Console group --> Agrupaciones 

console.group("Números"); //Inicia la agrupación
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.groupEnd(); //Termina la agrupación

//Dentro de un grupo se puede hacer otro grupo, generándo un árbol jerárquico.

