import {Pipe, PipeTransform} from '@angular/core'
@Pipe({
    name:'calculadora',
})
export class CalculadoraPipe implements PipeTransform{
    // mi parametro 1 es dato de => dato | calculadora: otrodato
    // mi parametro 2 es calculadora: otrodato de => dato | calculadora: otrodato
    transform(dato:any, otherDato:any){
        let operation = `
            Suma : ${parseInt(dato)+parseInt(otherDato)}
            Resta  : ${dato-otherDato}
            Multiplicación : ${dato*otherDato}
            División : ${dato/otherDato}
        `;
        return operation
    }
}