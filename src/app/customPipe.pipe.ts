import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:'custompipe'
})
export class CustomPipe implements PipeTransform {
    transform(value:string, args?:number){
        if (!value)
            return null;
        return value + " <= filtered Value";

    }
}