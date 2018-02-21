import { ApostaModel } from "../models/aposta.model";
import { AppService } from "../app.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ApostaService extends AppService<ApostaModel>{
    
    constructor(http: HttpClient) {
        super(http);
      }

    async inserirAposta(dezenas : number[]) : Promise<ApostaModel>{
        var aposta = await this.postAsync("aposta", dezenas);

        return <ApostaModel>aposta;
    }

    async gerarDezenas() : Promise<ApostaModel>{
        var aposta = await this.getAsync("aposta");

        return <ApostaModel>aposta;
    } 

    async getApostas() : Promise<ApostaModel[]>{
        var apostas = await this.getAllAsync("aposta");

        return <ApostaModel[]>apostas;
    }
}