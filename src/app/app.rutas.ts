import { RouterModule, Routes } from "@angular/router";
import { FormularioPersonaComponent } from "./components/formulario-persona/formulario-persona.component";
import { ListarPersonasComponent } from "./components/listar-personas/listar-personas.component";

const APP_ROUTES:Routes=[
  {path: "listarPersonas", component:ListarPersonasComponent},
  {path: "formularioPersonas", component:FormularioPersonaComponent}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:false});
