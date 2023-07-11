"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LISTA_CURSOS = void 0;
const Curso_1 = require("../models/Curso");
const cursoTS = new Curso_1.Curso("Typescript", 15);
const cursoJS = new Curso_1.Curso("Javascript", 20);
const cursoAngular = new Curso_1.Curso("Angular", 40);
exports.LISTA_CURSOS = [cursoTS, cursoJS, cursoAngular];
//# sourceMappingURL=cursos.mock.js.map