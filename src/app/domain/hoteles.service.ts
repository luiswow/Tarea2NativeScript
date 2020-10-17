import {Injectable} from "@angular/core"

@Injectable()
export class Hotelesservice{
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
}
