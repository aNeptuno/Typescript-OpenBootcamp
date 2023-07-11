import { Curso } from "../models/Curso";


const cursoTS: Curso = new Curso("Typescript", 15);
const cursoJS: Curso = new Curso("Javascript",20);
const cursoAngular: Curso = new Curso("Angular",40);

export const LISTA_CURSOS: Curso[] = [cursoTS,cursoJS, cursoAngular];

