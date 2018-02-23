import { Component, Pipe, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import swal from 'sweetalert2';

import { ApostaService } from '../services/aposta.service';
import { ApostaModel } from '../models/aposta.model';

@Component({
  selector: 'aposta-container',
  templateUrl: './aposta.component.html',
  styleUrls: ['../app.component.css', './aposta.component.css']
})
export class ApostaComponent implements OnInit {

  constructor(private apostaService: ApostaService) { }
  aposta : ApostaModel = new ApostaModel();
  apostas : ApostaModel[] = [];
  refresher : Subscription;
  
  ngOnInit() {

    this.refresher = Observable.timer(5000).repeat().subscribe(() => {
      this.apostaService.getApostas().then(c => {
        this.apostas = c;
      });
    })    
  }

  inserirAposta(){
    this.apostaService.inserirAposta(this.aposta.dezenas).then(c => swal("Aposta criada com sucesso!"));
  }

  gerarDezenas(){
    this.apostaService.gerarDezenas().then(c => {
      this.aposta = c;
    });
  }

}
