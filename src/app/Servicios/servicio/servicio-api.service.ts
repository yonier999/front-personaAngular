import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import UsuarioModelo from 'src/app/modelos/Usuario/usuario.modulo';
import {RespuestaModelo} from 'src/app/modelos/Respuesta/respuesta.modelo';
import {PersonaModelo} from 'src/app/modelos/Personas/persona.modelo';

@Injectable({
  providedIn: 'root'
})
export class ServicioAPiService {

  private url = environment.basepersona;
  usuario = new UsuarioModelo;

  private autorizacion = btoa(`${environment.usuario}:${environment.clave}`)
  header = new HttpHeaders({"Authorization":`${this.autorizacion}`,'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }
  ConsultarPersonas(){
    return this.http.get<RespuestaModelo<PersonaModelo[]>>(`${this.url}/ConsultarPersonas`,{headers:this.header})
  }
  InsertarPersona(persona:PersonaModelo){
    return this.http.post<RespuestaModelo<string>>(`${this.url}/InsertarPersonas`,persona,{headers:this.header});
  }
}
