import { Component, OnInit } from '@angular/core';
import { Alumno, Escuela } from 'src/app/modelo/Alumno';
import { AlumnoService } from 'src/app/service/alumnno.service';


@Component({
  selector: 'app-listar-alumno',
  templateUrl: './listar-alumno.component.html',
  styleUrls: ['./listar-alumno.component.css']
})
export class ListarAlumnoComponent implements OnInit {

  alumnos : Alumno[];

  constructor( private alumnosService : AlumnoService) { }

  ngOnInit(): void {

    this.alumnos = this.alumnosService.getAlumnos();

  }

}
