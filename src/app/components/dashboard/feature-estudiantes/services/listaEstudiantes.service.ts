import { Estudiantes, EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListaEstudiantesService {

  ListaEstudiantes=  [
    {id:1,nombre: "Juan",apellido:"Fernandez", edad:25,telefono:115512215, correo: 'j.fernandez@gmail.com'},
    {id:2,nombre: "Juan",apellido:"Fernandez",edad: 31, telefono: 561654215, correo: 'j.fernandez@gmail.com'},
    {id:3,nombre: "Nerina", apellido:"Ballantino", edad: 22, telefono: 156498714654 , correo: 'nerina12@gmail.com'},
    {id:4,nombre: "Julio", apellido:"Rodriguez", edad: 18, telefono: 6516541645 , correo: 'jrodirguez@gmail.com'},
    {id:5,nombre: "Juana", apellido:"Bustos", edad: 27, telefono: 935484645454 , correo: 'juanabustos@gmail.com'},
    {id:6,nombre: "María", apellido:"Sanchez", edad: 36, telefono: 516546315 , correo: 'msanchez14@gmail.com'},
    {id:7,nombre: "Pedro",  apellido:"Lopez",edad: 40, telefono: 53165465, correo: 'perdon@gmail.com'},
    {id:8,nombre: "Paula", apellido:"Robledo", edad: 14, telefono: 154987987 , correo: 'robledop@gmail.com'},
    {id:9,nombre: "Roberto", apellido:"Perez", edad: 30, telefono: 43654654, correo: 'rperez@gmail.com'},
    {id:10,nombre: "Esteban",  apellido:"De la Torre",edad:56 , telefono: 5465468547 , correo: 'delatorree@gmail.com'}
  ];
  constructor() { }

  getEstudiantes(){
    return this.ListaEstudiantes.slice();
  }

  eliminarEstudiante(index: number){
    this.ListaEstudiantes.splice(index, 1);
  }

  editarEstudiante(estudiante: EstudiantesLista){
      const index = this.ListaEstudiantes.findIndex(c => c.id === estudiante.id)
      this.ListaEstudiantes[index] = estudiante;
  }

  agregarEstudiante(estudiante: EstudiantesLista){
    this.ListaEstudiantes.unshift(estudiante);

  }

  editEstudiante(estudiante: EstudiantesLista) {
    const index = this.ListaEstudiantes.findIndex(c => c.id === estudiante.id);
    this.ListaEstudiantes[index] = estudiante;


  }
}