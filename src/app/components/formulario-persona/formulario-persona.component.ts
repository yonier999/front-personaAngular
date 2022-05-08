import { Component, OnInit } from '@angular/core';
import { PersonaModelo } from 'src/app/modelos/Personas/persona.modelo';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent implements OnInit {
  persona = new PersonaModelo();

  mensaje: string ="";

  constructor() {
  }

  ngOnInit(): void {
  }
  InsertarPersona(){
    this.mensaje = "";
    let validar = this.validarCampos();
    if(validar){
      console.log(validar);
    }else{

    }
  }
  validarCampos(){
    if(this.persona.nombre == ""){
      this.mensaje = "diligenciar el nombre";
      return false;
    }
    if(this.persona.apellido == ""){
      this.mensaje = "diligenciar el apellido";

      return false;
    }
    if(this.persona.email == ""){
      this.mensaje = "diligenciar el email";

      return false;
    }
    if(this.persona.ciudad == ""){
      this.mensaje = "diligenciar el ciudad";

      return false;
    }
    if(this.persona.telefono == ""){
      this.mensaje = "diligenciar el telefono";

      return false;
    }
    return true;
  }

}
