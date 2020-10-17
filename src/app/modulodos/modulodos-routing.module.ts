import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ListaComponent  } from "./lista/lista.component";
import { DetalleComponent  } from "./detalle/detalle.component";
import { HotelesComponent  } from "./hoteles/hoteles.component";
import { OpcionesusuarioComponent  } from "./opcionesusuario/opcionesusuario.component";
import { EdicionComponent  } from "./edicion/edicion.component";


const routes: Routes = [
    { path: "lista", component: ListaComponent },
    { path: "detalle", component: DetalleComponent },
    { path: "hoteles", component: HotelesComponent },
    { path: "opcionesusuario", component: OpcionesusuarioComponent },
    { path: "edicion", component: EdicionComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ModulodosRoutingModule { }
