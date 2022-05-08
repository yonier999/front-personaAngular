import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaModelo } from 'src/app/modelos/Personas/persona.modelo';
import { ServicioAPiService } from 'src/app/Servicios/servicio/servicio-api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent implements OnInit {
  persona = new PersonaModelo();

  mensaje: string ="";

  constructor(private serviA: ServicioAPiService,private router:Router) {

  }

  ngOnInit(): void {}
  InsertarPersona(){
    this.mensaje = "";
    let validar = this.validarCampos();
    if(validar){
      // console.log("llll")
        this.serviA.InsertarPersona(this.persona).subscribe((resp)=>{
          if(resp.mensaje.error == true)
          {
            Swal.fire({
              icon:"warning",
              title:"Alert",
              text:`${resp.mensaje.mensaje}`
            })
          }else{
            Swal.fire({
              icon:"success",
              title:"Exito!",
              text:"Data insertada"
            })
            this.router.navigate(["/listarPersonas"]);
          }
        });
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
