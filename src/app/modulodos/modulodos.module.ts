import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import {NativeScriptFormsModule} from "nativescript-angular/forms"
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ModulodosRoutingModule } from "./modulodos-routing.module";

import { ListaComponent } from "./lista/lista.component";
import { DetalleComponent } from "./detalle/detalle.component";
import { HotelesComponent } from "./hoteles/hoteles.component";
import { OpcionesusuarioComponent } from "./opcionesusuario/opcionesusuario.component";
import { EdicionComponent } from "./edicion/edicion.component";
import { MinLenDirective } from "./edicion/minlen.validator";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ModulodosRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        ListaComponent,
        DetalleComponent,
        HotelesComponent,
        OpcionesusuarioComponent,
        EdicionComponent,
        MinLenDirective
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ModulodosModule { }
