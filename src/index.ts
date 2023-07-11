import { setCookie, deleteCookie, deleteAllCookies, cookieExists } from 'cookies-utils';

import { LISTA_CURSOS } from './mock/cursos.mock';
import { Curso } from './models/Curso';
import { Estudiante } from './models/Estudiante';
import { Trabajador, Jefe } from './models/Persona';
import { ITarea, Nivel } from './models/interfaces/ITarea';
import { Programar } from './models/Programar';
import { Singleton } from './patterns/creacionales/Singleton';
import { ConcreteCreator1, ConcreteCreator2, Creator } from './patterns/creacionales/FactoryMethod';

/* Es importante tener en cuenta que el curso de OpenBootcamp es de la versión 4.X de Typescript,
especialmente para el tema de los decoradores (contenido 6 del curso) que han cambiado en la nueva versión de TS (5.X) 
de todas maneras, llegado al contenido 6 he dejado comentarios mostrando con ejemplos las diferencias de sintáxis y 
haciendo nuevamente un ejemplo visto en el curso pero con la nueva versión de los decoradores */


console.log("Hola Typescript");

//** Declaración de variables

var nombre : string = "Martin";
console.log("Hola " + nombre);
console.log("¿Qué tal", nombre + " ?");
console.log(`¿Cómo han ido las vacaciones ${nombre}?`);

const PI: number = 3.1416; //tipo JS para todos los tipos de numeros

var error: boolean;
error = false;
console.log(`¿Hay error?: ${error}`);

let a:string,b:boolean,c:number; //instancia 3 variables sin valor inicial
a="Typescript";
b=true;
c=8.9; //aunque sea flotante, es number

/* BuiltIn Types (primitivos, definidos por el lenguaje TS): 
number, string, boolean, void, null, undefined 
En las condiciones, void, null y undefined se tratan 
como valores falsos, el resto como verdaderos */

//Tipos mas complejos

//Lista de cadenas de texto
let listaTareas: string[] = ["Tarea1", "Tarea2"];

//Combinacion de tipos en listas
let valores : (string | number | boolean)[] = [false, "Hola", true, 56];

//Enumerados
enum Estados {
    "Completo" = 6,
    "Incompleto",
    "Pendiente"
} 

let estadoTarea: Estados = Estados.Incompleto; 
// Implícitamente el valor del primer enum es 0, si fuese modificado
// "Completado" = 6, el resto es autoincremental
console.log(`${estadoTarea}`);

//Tambien se puede hacer con letras
enum EstadosLetras {
    "Completo" = "C",
    "Incompleto" = "I",
    "Pendiente" = "P"
} 

//Al definir el primer enum, implícitamente se define el resto
enum PuestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercero"
}

let puestoMaraton: PuestoCarrera = PuestoCarrera.Segundo;

//INTERFACES

interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}

//crear variables que sigan la interface Tarea
let Tarea1:Tarea = {
    nombre: "Tarea1",
    estado: Estados.Pendiente,
    urgencia: 10
}

//Interface está pensada para definir 
//tipos de datos que van a formar parte de objetos


//Types de Typescript
type Producto = {
    precio: number,
    nombre: string,
    anio: number
}

let coche: Producto = {
    precio: 30.000,
    nombre: "Chevrolet",
    anio: 2010
}

//Si se hace:
let edad : number = 4;

let estudiante = {
    nombre: "Martin",
    edad //edad: 4
}
 

//Operador ternario
/* Se utiliza mucho en las vistas (React, Angular): 
renderizar o no un botón, ejecutar o no un código*/

//Si es true despues de ?, ejectuta lo anterior a :, 
//Si es false, lo que está despues de : 
console.log(coche.anio < 2010 ? `Coche ${coche.nombre} es viejo` 
: `Coche ${coche.nombre} es viejo`);

//trycatch
try {
    
} catch (error) {
    
}

// ** BUCLES
let listaTareasNueva: Tarea[] = [
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

]

//forEach espera una función, se ejecuta por cada elemento de la lista
listaTareasNueva.forEach((tarea: Tarea, index:number) => {
    console.log(`${index} - ${tarea.nombre}`);
})

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
}

//** FACTOR SPREAD

//Declaracion de variables 
let {titulo, estado, urgencia} = miTarea;

//es equivalente a hacer:
let miTitulo = miTarea.titulo;
let miEstado = miTarea.estado;
let miUrgencia = miTarea.urgencia;

//En listas
let listaCompraLunes : string[] = ["Leche", "Papas"];
let listaCompraMartes: string[] = [...listaCompraLunes, "Pan", "Huevos"];
let listaCompraMiercoles: string[]= ["Carne", "Pescado"];
let listaCompraSemana = [...listaCompraLunes, ...listaCompraMiercoles];

console.log(`${listaCompraSemana}`);
// Leche,Papas,Carne,Pescado

//En Objetos 

let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "Bearer12321321"
}
console.log(`estadoApp: ${JSON.stringify(estadoApp)}`);

//Cambiar un valor por propagación
let nuevoEstado = {
    ...estadoApp,
    session: 4
}

console.log(`nuevoEstado: ${JSON.stringify(nuevoEstado)}`);

//jwt: JSON web token


//** Funciones */

//Sintaxis
//Buena práctica es documentar o que las cosas sean autoexplicativas
/**
 * Función que muestra un saludo por consola
 */
function saludar(nombre:string) {
    console.log(`Hola ${nombre}`);   
}

saludar("Alex");

/**
 * 
 * Funcion con valor por defecto
 */
function despedir(nombre:string = "Pepe"){
    console.log(`Chau ${nombre}`);
}

despedir(); //Chau Pepe
despedir("Alba"); //Chau Alba

/**
 * 
 * @param nombre (Opcional) Nombre de la persona a despedir
 */

function despedidaOpcional(nombre?:string){
    if(nombre){
        console.log(`Chau ${nombre}`);
    } else {
        console.log(`Chau`);
    }
}

despedidaOpcional(); //Chau
despedidaOpcional("Alex"); //Chau Alex

function variosParams(nombre: string, apellidos?:string, edad:number = 18){
    if(apellidos){
        console.log(`${nombre} ${apellidos} tiene ${edad} años`);
    } else {
        console.log(`${nombre} tiene ${edad} años`);
    }   
}

variosParams("Martin"); //Martin tiene 18 años
variosParams("Martin","San José"); //Martin San José tiene 18 años
variosParams("Martin", undefined, 30); //Martin tiene 30 años
variosParams("Martin","San José", 30); //Martin San José tiene 30 años

function ejemploVariosTipos(a: string | number) {
    if(typeof(a) === 'string'){
        console.log(`${a} es un string`);
    } else if(typeof(a) === 'number') {
        console.log(`${a} es un number`);
    } else {
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
function ejemploReturn(nombre:string, apellidos:string): string{
    return `${nombre} ${apellidos}`;
}

const nombreCompleto = ejemploReturn("Alex", "Diban");

function ejemploReturnVariosTipos(a:string|number|undefined):string|number|undefined {
    return `${a}`;
}

//Factor de propagación (SPREAD)

/**
 * 
 * @param nombres es una lista de nombres de String
 */
function ejemploMultipleParams(...nombres:string[]):void{
    nombres.forEach( (nombre)=> {
        console.log(nombre);
    })
}

ejemploMultipleParams("Martin");
ejemploMultipleParams("Martin","Pepe","Juan");

const lista = ["Alberto", "Sandra"];

/**
 * 
 * @param nombres es una lista
 */
function ejemploParamsLista(nombres:string[]):void{
    nombres.forEach( (nombre)=> {
        console.log(nombre);
    })
}

ejemploMultipleParams(...lista);  
//pasaje por valor, se pasa cada uno de los valores
ejemploParamsLista(lista); 
//pasaje por referencia, se pasa la lista 

//ARROW FUNCTIONS

type Empleado = {
    nombre: string,
    apellidos: string,
    edad: number
}
//una interface sirve para definir valores y funciones
//con tipos se puede crear tipos a partir de otros tipos

let empleadoMartin: Empleado = {
    nombre: "Martin",
    apellidos: "San José",
    edad:30
}

const mostrarEmpleado = (empleado: Empleado):string => `${empleado.nombre} tiene ${empleado.edad} años`;

mostrarEmpleado(empleadoMartin);

console.log(mostrarEmpleado(empleadoMartin));


const datosEmpleado = (e:Empleado):string => {
    if(e.edad>70){
        return `Empleado ${e.nombre} está en edad jubilatoria`
    } else {
        return `Empleado ${e.nombre} está en edad laboral`
    }
}

datosEmpleado(empleadoMartin);
console.log(datosEmpleado(empleadoMartin));

//Funcion anonima dentro de otra funcion
//Callback: mando funcion y no se ejecuta hasta que se cumpla algo (promesa)
const obtenerSalario = (emp:Empleado, cobrar: () => void) => {
    if(emp.edad>70){
        return `Empleado ${emp.nombre} está en edad jubilatoria`
    } else {
        cobrar(); //callback a ejecutar
    }
}

//Solo si empleadoMartin tiene edad < 70 años se ejecuta el callback
obtenerSalario(empleadoMartin, () => 'Cobrar Martin');
console.log(obtenerSalario(empleadoMartin, () => 'Cobrar Martin'));

const cobrarEmpleado = (emp:Empleado) => {
    console.log(`${emp.nombre} cobra su salario`);
}

obtenerSalario(empleadoMartin, () => 'Cobrar Martin');



//** Funciones asincrónicas y generadoras

//Async
async function ejemploAsync():Promise<string> {
    await console.log(`Tarea a completar antes de seguir con la secuencia de instrucciones`);
    console.log(`Tarea completada`);
    return "Completado";
}

ejemploAsync().then((respuesta) => {
    console.log("Respuesta:", respuesta);
}).catch((error) => {
    console.log("Ha habido un error:", error);
}).finally(()=>"Todo ha terminado");

//Generators
function* ejemploGenerator(){
    // yield: emitir un nuevo valor o ejecutar otra funcion
    let index = 0;
    while(index<5){
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

function* watcher(valor: number){
    yield valor; //emite valor inicial
    yield* worker(valor); //llama a la funcion worker para que emita otros valores
    yield valor + 4; //una vez que haya terminado, emite el valor final + 4
}

function* worker(valor:number){
    yield valor +1;
    yield valor +2;
    yield valor +3;
}

let generadorSaga = watcher(0);

console.log(generadorSaga.next().value); //0, lo hace watcher
console.log(generadorSaga.next().value); //1, lo hizo worker
console.log(generadorSaga.next().value); //2, lo hizo worker
console.log(generadorSaga.next().value); //3, lo hizo worker
console.log(generadorSaga.next().value); //4, lo hizo watcher

//Sobrecarga de funciones

function mostrarError(error:string | number):void{
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
function guardar():void{
    localStorage.set("nombre", "Martin");
}

function leer():void{
    let nombre = localStorage.get("nombre");
}


//Cookies: npmjs (cookies-utils)

const cookieOptions = {
    name: "Usuario", // string,
    value: "Alex", // string,
    maxAge: 10 * 60, // optional number (value in seconds),
    expires: new Date(2099, 10, 1), // optional Date,
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
class  Temporizador {
    public terminar?: (tiempo:number) => void; //opcional, devuelve void

    public empezar(): void {
        setTimeout(()=> {
            if(!this.terminar) return; //en una sola linea se pueden omitir las llaves {}

            //Cuando haya pasado el tiempo se ejecutará la función terminar
            this.terminar(Date.now());
        }, 5000)
    }
}

const miTemporizador: Temporizador = new Temporizador();

//Definimos la función del callback a ejecutar cuando termine el tiempo
miTemporizador.terminar = (tiempo: number) => {
    console.log("Evento terminado en:", tiempo)
}

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
const listaCursos: Curso[] = LISTA_CURSOS;  

//Creamos un estudiante
const alex: Estudiante = new Estudiante("Alex", listaCursos, "Diban Iriarte");

console.log(`${alex.nombre} estudia: `);
alex.cursos.forEach((curso:Curso) => {
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
console.log(alex instanceof Estudiante); //true
console.log(alex.cursos[0] instanceof Estudiante); //false

let texto = new String("Hola"); //Clase String
let fechaNacimiento = new Date(1991,10,10);
if(fechaNacimiento instanceof Date){
    console.log(`Es una instancia de Date`);
}

//Herencia: archivo Persona.ts

let trabajador1 = new Trabajador("Alex", "Diban",22,2000);
let trabajador2 = new Trabajador("Pepe","Garcia",32,2500);
let trabajador3 = new Trabajador("Lorena","López",25,2000);

trabajador1.saludar(); 
/* trabajador1 es una instancia de Trabajador, 
que hereda la función saludar() de Persona*/

let jefe = new Jefe("Pablo","García",50);
jefe.trabajadores.push(trabajador1,trabajador2,trabajador3);

jefe.trabajadores.forEach((trabajador:Trabajador)=>{
    trabajador.saludar();
});

//trabajador1.saludar() -> está especificado en Trabajador
jefe.saludar(); //herencia de Persona

// * Uso de Interfaces

let programar: ITarea = {
    titulo: 'Programar en Typescript',
    descripcion: 'Practicar para aprender a desarrollar con TS',
    completada: false,
    urgencia: Nivel.Informativa,
    resumen: function (): string {
        let info:String = this.completada?'Completada':'No completada';
       return `${this.titulo} - ${info}`;
    }
}

console.log(programar.resumen());


// Tarea de Programacion (implementa ITarea)
let programarTS = new Programar("Typescript","Tarea de programacion en TS",false,Nivel.Informativa);
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


function LogClass(constuctor: Function, context:any){
    console.log(constuctor); 
    console.log(context); 
}

@LogClass
class MyClass {
    constructor(public name:string){

    }
} 

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


function LogClassFactory(lastName:string){
    return function LogClass5(constuctor: Function, context:any){
        console.log(constuctor); 
        console.log(context); 
        console.log(lastName);
    }
}

@LogClassFactory("Doe")
class MyClass5 {
    constructor(public name:string){
    }
}

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


function Override(label:string){
    return function(target:any, context:any){
        return class extends target {
            nombre = label;
        }
    }
}

@Override('Alex Diban')
class PruebaDecorador {
    nombre: string = 'Alex'
}

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
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

if (singleton1 === singleton2) {
    console.log('Singleton funciona, ambas variables contienen la misma instance.');
} else {
    console.log('Singleton no funciona, las variables contienten diferentes instances.');
}

singleton1.mostrarPorConsola();

// Factory Method

/**
 * The client code works with an instance of a concrete creator, albeit through
 * its base interface. As long as the client keeps working with the creator via
 * the base interface, you can pass it any creator's subclass.
 */
 function clientCode(creator: Creator) {
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
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());

//** Debugging, documentación y mantenimiento */

//tsconfig.json: "sourceMap": true
//Crea un mapeo de los archivos TS a los archivos JS emitidos. 

//npm run build:prod
//Ahora en la carpeta build podemos ver que está todo mapeado

//create a launch.json file: Node.js

//ESLint

//Documentar:   typedoc
//              https://tsdoc.org/play/
