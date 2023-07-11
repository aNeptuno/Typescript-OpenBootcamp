export enum Nivel{
    "Informativa",
    "Urgente",
    "Bloqueante"
}

/* La interface sirve para devinir la firma 
y los puntos necesarios a implementar a quien la use */
export interface ITarea {
    titulo:string,
    descripcion?: string,
    completada: boolean,
    urgencia?:Nivel,
    resumen: () => string
}

