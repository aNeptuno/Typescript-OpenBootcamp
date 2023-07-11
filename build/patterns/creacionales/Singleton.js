"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
/* Singleton es un patrón de diseño creacional que:
    -garantiza que tan solo exista un objeto de su tipo y
    -proporciona un único punto de acceso a él para cualquier otro código.
*/
class Singleton {
    // El constructor del singleton siempre debe ser privado
    // para evitar llamadas de construcción directas con el
    // operador `new`.
    constructor() { }
    //Función que permite al código acceder a la instancia (única) de esta clase
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    mostrarPorConsola() {
        console.log(`Método del Singleton`);
    }
}
exports.Singleton = Singleton;
/* Ejemplos de uso: Muchos desarrolladores consideran el patrón Singleton un antipatrón.
Por este motivo, su uso está en declive en el código TypeScript. */ 
//# sourceMappingURL=Singleton.js.map