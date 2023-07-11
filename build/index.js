"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cursos_mock_1 = require("./mock/cursos.mock");
const Estudiante_1 = require("./models/Estudiante");
const Persona_1 = require("./models/Persona");
const ITarea_1 = require("./models/interfaces/ITarea");
const Programar_1 = require("./models/Programar");
const Singleton_1 = require("./patterns/creacionales/Singleton");
const FactoryMethod_1 = require("./patterns/creacionales/FactoryMethod");
/* Es importante tener en cuenta que el curso de OpenBootcamp es de la versión 4.X de Typescript,
especialmente para el tema de los decoradores (contenido 6 del curso) que han cambiado en la nueva versión de TS (5.X)
de todas maneras, llegado al contenido 6 he dejado comentarios mostrando con ejemplos las diferencias de sintáxis y
haciendo nuevamente un ejemplo visto en el curso pero con la nueva versión de los decoradores */
console.log("Hola Typescript");
//** Declaración de variables
var nombre = "Martin";
console.log("Hola " + nombre);
console.log("¿Qué tal", nombre + " ?");
console.log(`¿Cómo han ido las vacaciones ${nombre}?`);
const PI = 3.1416; //tipo JS para todos los tipos de numeros
var error;
error = false;
console.log(`¿Hay error?: ${error}`);
let a, b, c; //instancia 3 variables sin valor inicial
a = "Typescript";
b = true;
c = 8.9; //aunque sea flotante, es number
/* BuiltIn Types (primitivos, definidos por el lenguaje TS):
number, string, boolean, void, null, undefined
En las condiciones, void, null y undefined se tratan
como valores falsos, el resto como verdaderos */
//Tipos mas complejos
//Lista de cadenas de texto
let listaTareas = ["Tarea1", "Tarea2"];
//Combinacion de tipos en listas
let valores = [false, "Hola", true, 56];
//Enumerados
var Estados;
(function (Estados) {
    Estados[Estados["Completo"] = 6] = "Completo";
    Estados[Estados["Incompleto"] = 7] = "Incompleto";
    Estados[Estados["Pendiente"] = 8] = "Pendiente";
})(Estados || (Estados = {}));
let estadoTarea = Estados.Incompleto;
// Implícitamente el valor del primer enum es 0, si fuese modificado
// "Completado" = 6, el resto es autoincremental
console.log(`${estadoTarea}`);
//Tambien se puede hacer con letras
var EstadosLetras;
(function (EstadosLetras) {
    EstadosLetras["Completo"] = "C";
    EstadosLetras["Incompleto"] = "I";
    EstadosLetras["Pendiente"] = "P";
})(EstadosLetras || (EstadosLetras = {}));
//Al definir el primer enum, implícitamente se define el resto
var PuestoCarrera;
(function (PuestoCarrera) {
    PuestoCarrera[PuestoCarrera["Primero"] = 1] = "Primero";
    PuestoCarrera[PuestoCarrera["Segundo"] = 2] = "Segundo";
    PuestoCarrera[PuestoCarrera["Tercero"] = 3] = "Tercero";
})(PuestoCarrera || (PuestoCarrera = {}));
let puestoMaraton = PuestoCarrera.Segundo;
//crear variables que sigan la interface Tarea
let Tarea1 = {
    nombre: "Tarea1",
    estado: Estados.Pendiente,
    urgencia: 10
};
let coche = {
    precio: 30.000,
    nombre: "Chevrolet",
    anio: 2010
};
//Si se hace:
let edad = 4;
let estudiante = {
    nombre: "Martin",
    edad //edad: 4
};
//Operador ternario
/* Se utiliza mucho en las vistas (React, Angular):
renderizar o no un botón, ejecutar o no un código*/
//Si es true despues de ?, ejectuta lo anterior a :, 
//Si es false, lo que está despues de : 
console.log(coche.anio < 2010 ? `Coche ${coche.nombre} es viejo`
    : `Coche ${coche.nombre} es viejo`);
//trycatch
try {
}
catch (error) {
}
// ** BUCLES
let listaTareasNueva = [
    {
        nombre: "Tarea1",
        estado: Estados.Completo,
        urgencia: 2
    },
    {
        nombre: "Tarea2",
        estado: Estados.Pendiente,
        urgencia: 0
    },
    {
        nombre: "Tarea3",
        estado: Estados.Incompleto,
        urgencia: 15
    }
];
//forEach espera una función, se ejecuta por cada elemento de la lista
listaTareasNueva.forEach((tarea, index) => {
    console.log(`${index} - ${tarea.nombre}`);
});
//forin bucle que itera sobre un Objeto
//no se suele usar con listas, para eso es forEach
//o tambien se puede usar el for clásico
for (let index = 0; index < listaTareasNueva.length; index++) {
    const element = listaTareasNueva[index];
    console.log(`${index} - ${Tarea1.nombre}`);
}
// Bucles While 
/*

while (Tarea1.estado !== Estados.Completo) {
    if(Tarea1.urgencia == 5){
        Tarea1.estado = Estados.Completo;
        break;
    } else {
        Tarea1.urgencia ++;
    }
}

//dowhile se ejecuta siempre al menos una vez
do {
    Tarea1.urgencia++;
    Tarea1.estado = Estados.Completo;
} while (Tarea1.estado !== Estados.Completo);

*/
//Asignación múltiple de variables, ECMAscript
let miTarea = {
    titulo: 'Mi tarea',
    estado: Estados.Completo,
    urgencia: 1
};
//** FACTOR SPREAD
//Declaracion de variables 
let { titulo, estado, urgencia } = miTarea;
//es equivalente a hacer:
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;
//En listas
let listaCompraLunes = ["Leche", "Papas"];
let listaCompraMartes = [...listaCompraLunes, "Pan", "Huevos"];
let listaCompraMiercoles = ["Carne", "Pescado"];
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMiercoles];
console.log(`${listaCompraSemana}`);
// Leche,Papas,Carne,Pescado
//En Objetos 
let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "Bearer12321321"
};
console.log(`estadoApp: ${JSON.stringify(estadoApp)}`);
//Cambiar un valor por propagación
let nuevoEstado = Object.assign(Object.assign({}, estadoApp), { session: 4 });
console.log(`nuevoEstado: ${JSON.stringify(nuevoEstado)}`);
//jwt: JSON web token
//** Funciones */
//Sintaxis
//Buena práctica es documentar o que las cosas sean autoexplicativas
/**
 * Función que muestra un saludo por consola
 */
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
saludar("Alex");
/**
 *
 * Funcion con valor por defecto
 */
function despedir(nombre = "Pepe") {
    console.log(`Chau ${nombre}`);
}
despedir(); //Chau Pepe
despedir("Alba"); //Chau Alba
/**
 *
 * @param nombre (Opcional) Nombre de la persona a despedir
 */
function despedidaOpcional(nombre) {
    if (nombre) {
        console.log(`Chau ${nombre}`);
    }
    else {
        console.log(`Chau`);
    }
}
despedidaOpcional(); //Chau
despedidaOpcional("Alex"); //Chau Alex
function variosParams(nombre, apellidos, edad = 18) {
    if (apellidos) {
        console.log(`${nombre} ${apellidos} tiene ${edad} años`);
    }
    else {
        console.log(`${nombre} tiene ${edad} años`);
    }
}
variosParams("Martin"); //Martin tiene 18 años
variosParams("Martin", "San José"); //Martin San José tiene 18 años
variosParams("Martin", undefined, 30); //Martin tiene 30 años
variosParams("Martin", "San José", 30); //Martin San José tiene 30 años
function ejemploVariosTipos(a) {
    if (typeof (a) === 'string') {
        console.log(`${a} es un string`);
    }
    else if (typeof (a) === 'number') {
        console.log(`${a} es un number`);
    }
    else {
        console.log(`${a} no es un string ni un number`);
        throw Error(`${a} no es un string ni un number`);
    }
}
ejemploVariosTipos("Hola");
ejemploVariosTipos(3);
/**
 *
 * @param nombre de la persona
 * @param apellidos de la persona
 * @returns el nombre completo de la persona
 */
function ejemploReturn(nombre, apellidos) {
    return `${nombre} ${apellidos}`;
}
const nombreCompleto = ejemploReturn("Alex", "Diban");
function ejemploReturnVariosTipos(a) {
    return `${a}`;
}
//Factor de propagación (SPREAD)
/**
 *
 * @param nombres es una lista de nombres de String
 */
function ejemploMultipleParams(...nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
ejemploMultipleParams("Martin");
ejemploMultipleParams("Martin", "Pepe", "Juan");
const lista = ["Alberto", "Sandra"];
/**
 *
 * @param nombres es una lista
 */
function ejemploParamsLista(nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
ejemploMultipleParams(...lista);
//pasaje por valor, se pasa cada uno de los valores
ejemploParamsLista(lista);
//una interface sirve para definir valores y funciones
//con tipos se puede crear tipos a partir de otros tipos
let empleadoMartin = {
    nombre: "Martin",
    apellidos: "San José",
    edad: 30
};
const mostrarEmpleado = (empleado) => `${empleado.nombre} tiene ${empleado.edad} años`;
mostrarEmpleado(empleadoMartin);
console.log(mostrarEmpleado(empleadoMartin));
const datosEmpleado = (e) => {
    if (e.edad > 70) {
        return `Empleado ${e.nombre} está en edad jubilatoria`;
    }
    else {
        return `Empleado ${e.nombre} está en edad laboral`;
    }
};
datosEmpleado(empleadoMartin);
console.log(datosEmpleado(empleadoMartin));
//Funcion anonima dentro de otra funcion
//Callback: mando funcion y no se ejecuta hasta que se cumpla algo (promesa)
const obtenerSalario = (emp, cobrar) => {
    if (emp.edad > 70) {
        return `Empleado ${emp.nombre} está en edad jubilatoria`;
    }
    else {
        cobrar(); //callback a ejecutar
    }
};
//Solo si empleadoMartin tiene edad < 70 años se ejecuta el callback
obtenerSalario(empleadoMartin, () => 'Cobrar Martin');
console.log(obtenerSalario(empleadoMartin, () => 'Cobrar Martin'));
const cobrarEmpleado = (emp) => {
    console.log(`${emp.nombre} cobra su salario`);
};
obtenerSalario(empleadoMartin, () => 'Cobrar Martin');
//** Funciones asincrónicas y generadoras
//Async
function ejemploAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log(`Tarea a completar antes de seguir con la secuencia de instrucciones`);
        console.log(`Tarea completada`);
        return "Completado";
    });
}
ejemploAsync().then((respuesta) => {
    console.log("Respuesta:", respuesta);
}).catch((error) => {
    console.log("Ha habido un error:", error);
}).finally(() => "Todo ha terminado");
//Generators
function* ejemploGenerator() {
    // yield: emitir un nuevo valor o ejecutar otra funcion
    let index = 0;
    while (index < 5) {
        //Emitimos un valor incrementado
        yield index++;
    }
}
//Guardamos la funcion generadora en una variable
let generadora = ejemploGenerator();
//Accedemos a los valores emitidos
console.log(generadora.next().value); //0
console.log(generadora.next().value); //1
console.log(generadora.next().value); //2
console.log(generadora.next().value); //3
//.next() devuelve el siguiente valor emitido
//.done? pregunta si se ha completado, devuelve true/false
//porque yield puede ser ejecucion de otra funcion (por ejemplo, asincrona)
//Funcion worker and watcher (GENERATOR SAGA)
//(React, Angular) para escuchar el estado de una funcion
function* watcher(valor) {
    yield valor; //emite valor inicial
    yield* worker(valor); //llama a la funcion worker para que emita otros valores
    yield valor + 4; //una vez que haya terminado, emite el valor final + 4
}
function* worker(valor) {
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
}
let generadorSaga = watcher(0);
console.log(generadorSaga.next().value); //0, lo hace watcher
console.log(generadorSaga.next().value); //1, lo hizo worker
console.log(generadorSaga.next().value); //2, lo hizo worker
console.log(generadorSaga.next().value); //3, lo hizo worker
console.log(generadorSaga.next().value); //4, lo hizo watcher
//Sobrecarga de funciones
function mostrarError(error) {
    console.log("Ha habido un error:", error);
    //Se envalua typeof para cada caso
}
//** Eventos y persistencia de datos en el navegador
//Persistencia de datos (almacenar info en el navegador)
//Info del estado de la APP: por ejemplo: info de sesion (token), objetos
//1. LocalStorage --> Almacena los datos en el navegador (no se eleminan automáticamente)
//2. SessionStorage -->La diferencia radica en la sesion de navegador. Es decir, los datos se persisten en la sesion de navegador.
//3. Cookies --> Tienen una fecha de caducidad y un ámbito de URL
//Diferencia: cómo guardar datos, por cuánto tiempo, y qué tipo de datos
//LocalStorage
function guardar() {
    localStorage.set("nombre", "Martin");
}
function leer() {
    let nombre = localStorage.get("nombre");
}
//Cookies: npmjs (cookies-utils)
const cookieOptions = {
    name: "Usuario",
    value: "Alex",
    maxAge: 10 * 60,
    expires: new Date(2099, 10, 1),
    path: "/", // optional string,
};
/* //Set cookie
setCookie(cookieOptions);

//Check si la cookie existe
const isExist = cookieExists("usuario");

//Eliminar cookie "usuario"
deleteCookie("usuario");

//Eliminar todas las cookies
deleteAllCookies();
 */
//Gestion de los eventos
/**
 * Temporizador que ejecutará algún tipo de función (evento) al cabo de 5 segundos
 */
class Temporizador {
    empezar() {
        setTimeout(() => {
            if (!this.terminar)
                return; //en una sola linea se pueden omitir las llaves {}
            //Cuando haya pasado el tiempo se ejecutará la función terminar
            this.terminar(Date.now());
        }, 5000);
    }
}
const miTemporizador = new Temporizador();
//Definimos la función del callback a ejecutar cuando termine el tiempo
miTemporizador.terminar = (tiempo) => {
    console.log("Evento terminado en:", tiempo);
};
//Lanzamos el temporizador
miTemporizador.empezar(); //Se inicia el timeout, y cuando termine, se ejecuta la función terminar
//Imprimir por consola "Tic" cada segundo 
/* setInterval(()=>console.log("Tic"),1000); */
//Eliminar la ejecición de la función
/* delete miTemporizador.terminar;  */
//Extender de EventTarget
//class Temporizador2 extends EventTarget
//** Clases y objetos  */
//Por defecto las clases son púlicas
//Las propiedades pueden o no ser públicas.
//El constructor es público.
/* class Curso {
    nombre: string;
    horas: number;

    constructor(nombre:string, horas:number){
        this.nombre = nombre;
        this.horas = horas;
    }
} */
/* class Estudiante {

    //Propiedades de clase
    nombre: string;
    apellidos?:string;
    cursos: Curso[];

    //Constructor
    //Las propiedades opcionales se pueden poner al final
    constructor(nombre:string, cursos:Curso[], apellidos?:string){
        //Inicializamos las propiedades
        this.nombre = nombre;
        if(apellidos){
            this.apellidos=apellidos;
        }
        //Otra forma:
        //this.apellidos = apellidos?apellidos:undefined;
        this.cursos = cursos;
        
    }
} */
// Creamos un curso
/* const cursoTS: Curso = new Curso("Typescript", 15);
const cursoJS: Curso = new Curso("Javascript",20); */
//Creamos una lista de cursos
const listaCursos = cursos_mock_1.LISTA_CURSOS;
//Creamos un estudiante
const alex = new Estudiante_1.Estudiante("Alex", listaCursos, "Diban Iriarte");
console.log(`${alex.nombre} estudia: `);
alex.cursos.forEach((curso) => {
    console.log(`-${curso.nombre} (${curso.horas} horas)`);
});
console.log(`Horas estudiadass: ${alex.horasEstudiadas} horas`);
/* //Creamos otro curso
const cursoAngular: Curso = new Curso("Angular",40);
alex.cursos.push(cursoAngular);
 */
//getter
console.log(`ID: ${alex.ID_Estudiante}`);
//setter
alex.ID_Estudiante = '0002452488';
console.log(`ID nuevo: ${alex.ID_Estudiante}`);
//** Herencia, polimorfismo, decoradores e interfaces */
//Saber la instancia de un objeto/variable
//typeof: saber el tipo de una variable
//instanceof: saber la instancia de un tipo concreto
console.log(alex instanceof Estudiante_1.Estudiante); //true
console.log(alex.cursos[0] instanceof Estudiante_1.Estudiante); //false
let texto = new String("Hola"); //Clase String
let fechaNacimiento = new Date(1991, 10, 10);
if (fechaNacimiento instanceof Date) {
    console.log(`Es una instancia de Date`);
}
//Herencia: archivo Persona.ts
let trabajador1 = new Persona_1.Trabajador("Alex", "Diban", 22, 2000);
let trabajador2 = new Persona_1.Trabajador("Pepe", "Garcia", 32, 2500);
let trabajador3 = new Persona_1.Trabajador("Lorena", "López", 25, 2000);
trabajador1.saludar();
/* trabajador1 es una instancia de Trabajador,
que hereda la función saludar() de Persona*/
let jefe = new Persona_1.Jefe("Pablo", "García", 50);
jefe.trabajadores.push(trabajador1, trabajador2, trabajador3);
jefe.trabajadores.forEach((trabajador) => {
    trabajador.saludar();
});
//trabajador1.saludar() -> está especificado en Trabajador
jefe.saludar(); //herencia de Persona
// * Uso de Interfaces
let programar = {
    titulo: 'Programar en Typescript',
    descripcion: 'Practicar para aprender a desarrollar con TS',
    completada: false,
    urgencia: ITarea_1.Nivel.Informativa,
    resumen: function () {
        let info = this.completada ? 'Completada' : 'No completada';
        return `${this.titulo} - ${info}`;
    }
};
console.log(programar.resumen());
// Tarea de Programacion (implementa ITarea)
let programarTS = new Programar_1.Programar("Typescript", "Tarea de programacion en TS", false, ITarea_1.Nivel.Informativa);
console.log(programarTS.resumen());
/* Diferencia entre TYPE, INTERFACE y CLASS

1.  TYPE es una manera de definir un tipo propio personalizado
    que no llega a la complejidad de una clase (no requiere crear propiedades, constructores o métodos)
    sino que simplemente es un almacen de datos más complejo que un string, o que un objeto normal.

2.  INTERFACE se utiliza para definir conceptos de valores, atributos que quisieramos dar,
    además de decidir qué métodos deben de estar implementados

3.  CLASE sería una manera de implementar las interfaces,
    o para cuando queremos crear objetos más complejos que los propios de TS
 
*/
//** DECORADORES (experimentales) */
//Son funciones declaradas a través de un símbolo (@)
//Existen varios tipos:
// - Clases         (añadir info a una clase)
// - Parámentros    (añadir info a un parámetro de una clase o mètodo)
// - Métodos        (añadir propiedades extra a un método / APIRESTful, cual es el endpoint)
// - Propiedades
/* Los ejemplos del video son para versiones inferiores a la 5.0 de Typescript
   Ver abajo los ejemplos actualizados

// Esta función es el decorador
function Override(label: string){
    //target: clase a la que está apuntando
    //key: lo que va a ser modificado
    return function(target:any, key:string){
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        })
    }
}

class PruebaDecorador {
    @Override('Prueba') //Llamar a la función Override
    nombre: string = 'Martin'
}
//5.X: TypeError: Cannot set property nombre of #<PruebaDecorador> which has only a getter

let prueba = new PruebaDecorador();
console.log(prueba.nombre);
//Al hacer el consolelog, no saldría 'Martin', sino 'Prueba'
//los decoradores modifican valores/propiedades que vienen inmediatamente después definidos

// Otra funcion para usarla como decorador
function SoloLectura(target:any, key:string){
    Object.defineProperty(target, key, {
        writable: false
    })
}

class PruebaSoloLectura {
    @SoloLectura
    nombre: string = '';
}

let pruebaLectura = new PruebaSoloLectura();
pruebaLectura.nombre = "Martin";

console.log(pruebaLectura.nombre)
// ==>Undefined, ya que no se le puede dar valor (es solo de lectura)

//Decorador para parámetros de un método
function mostrarPosicion(target:any, propertykey:string, parameterIndex:number){
    console.log("Posicion", parameterIndex);
}

class PruebaMetodoDecorador {
    prueba(a:string, @mostrarPosicion b:boolean){
        console.log(b);
    }
}

//Usamos el método con el parámetro y su decorador
new PruebaMetodoDecorador().prueba("Hola",false);

*/
//VERSION 4.X
//"experimentalDecorators": true,                
//"emitDecoratorMetadata": true,  
/*
function LogClass(constuctor: Function){
    console.log(constuctor);
}

//Por default, el parámetro del Decorador es 'target'
//Le llama 'constructor' porque el target es la función constructor de la clase MyClass

@LogClass
class MyClass {
}
 */
//logs: [class MyClass]
//                        VERSION 5.X
//"experimentalDecorators": false,                
//"emitDecoratorMetadata": false,  
//Dos parámetros: target y context
//Primera letra en mayusculas, sin ; al final
function LogClass(constuctor, context) {
    console.log(constuctor);
    console.log(context);
}
let MyClass = (() => {
    let _classDecorators = [LogClass];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var MyClass = _classThis = class {
        constructor(name) {
            this.name = name;
        }
    };
    __setFunctionName(_classThis, "MyClass");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        MyClass = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MyClass = _classThis;
})();
/*
[LOG]: class {
        constructor(name) {
            this.name = name;
        }
    }
[LOG]: {
  "kind": "class",
  "name": "MyClass5"
}
 */
//Para pasar argumentos al decorador, hay que crear una funcion Decorator Factory
//Decorator Factory es una funcion que toma argumentos y retorna una funcion decoradora
function LogClassFactory(lastName) {
    return function LogClass5(constuctor, context) {
        console.log(constuctor);
        console.log(context);
        console.log(lastName);
    };
}
let MyClass5 = (() => {
    let _classDecorators_1 = [LogClassFactory("Doe")];
    let _classDescriptor_1;
    let _classExtraInitializers_1 = [];
    let _classThis_1;
    var MyClass5 = _classThis_1 = class {
        constructor(name) {
            this.name = name;
        }
    };
    __setFunctionName(_classThis_1, "MyClass5");
    (() => {
        __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
        MyClass5 = _classThis_1 = _classDescriptor_1.value;
        __runInitializers(_classThis_1, _classExtraInitializers_1);
    })();
    return MyClass5 = _classThis_1;
})();
/*
[class MyClass5]
{
  kind: 'class',
  name: 'MyClass5',
  addInitializer: [Function (anonymous)]
}
Doe
 */
//https://www.typescriptlang.org/play?#code/MYewdgziA2CmB0w4EMBOAKAlAbgFC4DMBXMYAFwEtwACAWQrHWgoFsKyAuasIlgI1ipM1AN65qE6qlhkiqMNWKlK4dGTQBzGVwDyfAFaxyAGmoAHVCDOCyATwDSsW1whlUDDcLGSf1APQAVNQA6rDcsLAAJtRkINSRsAQMYQBMiiTkVJCKIKjUABbIYJHMYBrUAO75sApk1dREEILhURAxcdLI0bnUTWQx9QBuyNBEYSAEA2EWVja2lez5U-FGucixqPDivhIAKvVaZGTN0rLybXVhw6Pjk5fmltaodgWsTdAE8NQBfts7cP1rmNqC43B48DsJH4-PdDsc8hNljMni9YlIZHJakMRmMtpDqKBIP04c0ALzpZRZLCiP749FnBRA2AQyEAXxZO2h+zCfXh1EOF2xN2oiPuyLmlWqCkaHmo7GoRWihWKcEFVxGFEi6yyeMhhNcvRkfPJSkyqjAsAqADURqD3GUvLT8RQCOgLdaRvA4GU6tQADzUZhsMiOumQwLUbkPWbPeaCSx5C2tdrUAQrJBoKINCCyvSGcjwBJJC0ABUeEuQvXyuX6rly82QfBARH6IAMRjIhcSyTLMZeTrDcra8uq0DMFziReS0ZRFFgEF1g8kUanpfLseoLBk1ciF2QAGswgBmcxoZBb+EQLgDsP3BiuIrAW7LNv5simMXrl5gc+wUyKhUFFfDsFl9e5CSSDQ5G1GhmEPZYmRFPJYSNZoAN5QRFyXag8w7Lti1gXsUVsNRNBkUwAHJ41yCAKNMbxsJ2JkuAAAwATWbPIzGQCAIAqXJoggasiGgaI0z4CgNC0ZDlWoAASEQg3YVkWJvOlWRwag1PxH5tMhXCC1XQivxI9RUEOSjqNQWj6L0sNmOodjONPXj+NQQThNE1MwgkqTmjqIp5MU1hlNUxiJA0jl1Ls6hYGgJoaXC6hEPJd0bWgKL8VZHY1PZLT8QMzsjKIuZSPM8iZzmRxbFspdDi4ElUGMGK+hcVDUFyzTaVZXAevwDNeOoABVJo8gYiRGkEH8tztcFaQAAXoRgAA5MFpbjXIE2ayii-U3CIchcnQSb5F-baNFMDa+K23owQdcbfDqCgFxO6awnJV7f0yyQnoXK63Oicl-oEqLsskXr8FwAF4iKWwRrJcIKmG0b0AAIi1MBbFR0xUau1GcFwfUYAQaAQA0dAMbh0aCaJuAvTJinYfhzYrIgHAgA
function Override(label) {
    return function (target, context) {
        return class extends target {
            constructor() {
                super(...arguments);
                this.nombre = label;
            }
        };
    };
}
let PruebaDecorador = (() => {
    let _classDecorators_2 = [Override('Alex Diban')];
    let _classDescriptor_2;
    let _classExtraInitializers_2 = [];
    let _classThis_2;
    var PruebaDecorador = _classThis_2 = class {
        constructor() {
            this.nombre = 'Alex';
        }
    };
    __setFunctionName(_classThis_2, "PruebaDecorador");
    (() => {
        __esDecorate(null, _classDescriptor_2 = { value: _classThis_2 }, _classDecorators_2, { kind: "class", name: _classThis_2.name }, null, _classExtraInitializers_2);
        PruebaDecorador = _classThis_2 = _classDescriptor_2.value;
        __runInitializers(_classThis_2, _classExtraInitializers_2);
    })();
    return PruebaDecorador = _classThis_2;
})();
let pruebaDecorador = new PruebaDecorador();
console.log(pruebaDecorador);
//Ejemplo Decorador de parámetro. Versiones 4.X
/*
function MinLength(length:number){
    return (target:any, propertyName:string)=>{

        let value:string;

        const descriptor: PropertyDescriptor = {
            //crtl+space muestra las posibles propiedades
            get() { return value; },
            set(newValue:string){
                if(newValue.length<length)
                    throw new Error(`${propertyName} should be at least ${length} caracters long.`);
                value = newValue; //if the value is valid, we store it in 'value' variable
            }
        };

        Object.defineProperty(target,propertyName, descriptor);
    }
}

class User {
    @MinLength(4)
    password:string;

    constructor(password:string){
        this.password = password;
    }
}

let user = new User('1234');
console.log(user.password);
*/
//** PATRONES DE DISEÑO */
//Los patrones de diseño son unas técnicas para resolver problemas comunes en el desarrollo de software y otros ámbitos referentes al diseño de interacción o interfaces.
//No son librerías/bibliotecas, es decir, no son estandarizaciones, por el contrario, son decisiones que tomamos para elegir cuál es la mejor función para nuestro proyecto.
//Es importante entender los patrones en su contexto, y luego, si estamos en un contexto similar podemos optar por utilizarlos.
//Patrones:
//1. Creacionales (Creational): 
//      -> Mecanismos de creación de objetos/clases
//      -> Buscan la reutilización del código
//      -> Ofrecer flexibilidad al código
//2. Estructurales (Structural):
//      -> Eficiencia y flexibilidad de la estructura a la hora de definir clases y objetos. (¿cómo los estructuramos, como los relacionamos entre si?)
//3. de Comportamiento (Behavioral):
//      -> Centrados en la asignación efectiva de la responsabilidad entre objetos. (Principio solid)
//      -> Comunicación efectiva entre objetos
//Web:  https://refactoring.guru/es/
//      https://refactoring.guru/es/design-patterns/catalog
//      https://refactoring.guru/es/design-patterns/typescript
// Singleton
const singleton1 = Singleton_1.Singleton.getInstance();
const singleton2 = Singleton_1.Singleton.getInstance();
if (singleton1 === singleton2) {
    console.log('Singleton funciona, ambas variables contienen la misma instance.');
}
else {
    console.log('Singleton no funciona, las variables contienten diferentes instances.');
}
singleton1.mostrarPorConsola();
// Factory Method
/**
 * The client code works with an instance of a concrete creator, albeit through
 * its base interface. As long as the client keeps working with the creator via
 * the base interface, you can pass it any creator's subclass.
 */
function clientCode(creator) {
    // ...
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
    // ...
}
/**
 * The Application picks a creator's type depending on the configuration or
 * environment.
 */
console.log('App: Launched with the ConcreteCreator1.');
clientCode(new FactoryMethod_1.ConcreteCreator1());
console.log('');
console.log('App: Launched with the ConcreteCreator2.');
clientCode(new FactoryMethod_1.ConcreteCreator2());
//** Debugging, documentación y mantenimiento */
//tsconfig.json: "sourceMap": true
//Crea un mapeo de los archivos TS a los archivos JS emitidos. 
//# sourceMappingURL=index.js.map