import { Curso } from "./Curso";


export class Estudiante {

    //Propiedades de clase
    nombre: string;
    apellidos?:string;
    cursos: Curso[];

    //esta propiedad no podrá ser accesible desde fuera 
    private ID: string = '0001321312'; 

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

    //getter es una funcion publica
    get horasEstudiadas(): number{
        let horasEstudiadas=0;
        this.cursos.forEach((curso)=> {
            horasEstudiadas += curso.horas;
        });
        return horasEstudiadas;
    }

    get ID_Estudiante(): string {
         //dentro del ambito de clase SI se puede acceder al ID
        return this.ID; 
    }

    set ID_Estudiante(id:string){
        this.ID= id;
    }
}