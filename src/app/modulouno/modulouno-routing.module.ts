import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {  ComponenteunoComponent } from "./componenteuno/componenteuno.component";
import {  ComponentedosComponent } from "./componentedos/componentedos.component";

const routes: Routes = [
    { path: "componentedos", component: ComponentedosComponent },
    { path: "**", component: ComponenteunoComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ModulounoRoutingModule { }
