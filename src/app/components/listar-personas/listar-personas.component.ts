import { Component, OnInit } from '@angular/core';
import { ServicioAPiService } from 'src/app/Servicios/servicio/servicio-api.service';
import {PersonaModelo} from 'src/app/modelos/Personas/persona.modelo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css']
})
export class ListarPersonasComponent implements OnInit {
  listaPersonas: PersonaModelo[];
  constructor(private servicioApi:ServicioAPiService) { }

  ngOnInit(): void {
    this.consultarPersonas();
  }
  consultarPersonas(){
    console.log("jjjjj")
    this.servicioApi.ConsultarPersonas().subscribe((resp)=>{
      if(resp.mensaje.error == true)
      {
        Swal.fire({
          icon:"warning",
          title:"Alert",
          text:`${resp.mensaje.mensaje}`
        })
      }else{
        this.listaPersonas = resp.data;
        console.log("llega el arreglo")
      }
    })
  }

}
