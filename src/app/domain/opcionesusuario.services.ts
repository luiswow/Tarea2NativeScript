import {Injectable} from "@angular/core"

@Injectable()
export class Opcionesusuarioservice{
    private features:Array<string> = [];

    agregar(s:string){
        this.features.push(s);
    }

    buscar(){
        return this.features;
    }

    limpiar(){
        this.features = [];
    }

    eliminarUltimo(){
        var length = this.features.length-1;
        this.features.splice(length, 1);
    }
}
