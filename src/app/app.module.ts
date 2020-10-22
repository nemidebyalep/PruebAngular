import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddAlumnoComponent } from './Componente/alumnos/add-alumnos/add-alumnos.component';
import { AlumnoService } from './service/alumnno.service';
import { ListarAlumnoComponent } from './Componente/alumnos/listar-alumno/listar-alumno.component';


@NgModule({
  declarations: [
    AppComponent,
    AddAlumnoComponent,
    ListarAlumnoComponent
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AlumnoService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { 

}