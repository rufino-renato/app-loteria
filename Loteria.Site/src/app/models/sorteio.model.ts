import { ApostaModel } from "./aposta.model";

export class SorteioModel{
    Id : number;
    Dezenas : number;
    Data : Date;
    Apostas : ApostaModel[];
}
