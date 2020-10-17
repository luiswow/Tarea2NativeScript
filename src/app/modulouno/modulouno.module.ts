import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ModulounoRoutingModule } from "./modulouno-routing.module";
import {  ComponenteunoComponent } from "./componenteuno/componenteuno.component";
import {  ComponentedosComponent } from "./componentedos/componentedos.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ModulounoRoutingModule
    ],
    declarations: [
        ComponenteunoComponent,
        ComponentedosComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ModulounoModule { }
