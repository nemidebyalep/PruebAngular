import { Injectable } from '@angular/core';
import { Alumno, Escuela } from '../modelo/alumno'
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private alumnos : Alumno[];
  private escuelas : Escuela[];
  constructor() { //se deciden aquellas acciones que se va a ejecutar
    this.escuelas=[ //se crea un arreglo de escuelas
      {idescuela:1,nombre:'Sistemas'},
      {idescuela:1,nombre:'Alimentos'},
      {idescuela:1,nombre:'Ambiental'},
    ];
    this.alumnos=[]; 
  }
  getEscuelas(){
    return this.escuelas;
  }
  getAlumnos(){
    return this.alumnos
}
    addAlumno(alumno:Alumno){
    this.alumnos.push(alumno);
}
    nuevoAlumno():Alumno{
    return{
        idalumno:0, 
        nombre:'',
        direccion:'',
        escuela:0
    }
}
}