"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
class Estudiante {
    //Constructor
    //Las propiedades opcionales se pueden poner al final
    constructor(nombre, cursos, apellidos) {
        //esta propiedad no podrá ser accesible desde fuera 
        this.ID = '0001321312';
        //Inicializamos las propiedades
        this.nombre = nombre;
        if (apellidos) {
            this.apellidos = apellidos;
        }
        //Otra forma:
        //this.apellidos = apellidos?apellidos:undefined;
        this.cursos = cursos;
    }
    //getter es una funcion publica
    get horasEstudiadas() {
        let horasEstudiadas = 0;
        this.cursos.forEach((curso) => {
            horasEstudiadas += curso.horas;
        });
        return horasEstudiadas;
    }
    get ID_Estudiante() {
        //dentro del ambito de clase SI se puede acceder al ID
        return this.ID;
    }
    set ID_Estudiante(id) {
        this.ID = id;
    }
}
exports.Estudiante = Estudiante;
//# sourceMappingURL=Estudiante.js.map