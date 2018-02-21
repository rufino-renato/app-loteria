import { Component, Pipe, OnInit } from '@angular/core';
import { ApostaService } from '../../services/aposta.service';
import { ApostaModel } from '../../models/aposta.model';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import swal from 'sweetalert2';

@Component({
  selector: 'app-aposta',
  templateUrl: './aposta.component.html',
  styleUrls: ['./aposta.component.css']
})
export class ApostaComponent implements OnInit {

  constructor(private apostaService: ApostaService) { }
  dezenas : number[] = [null, null, null, null, null, null];
  apostas : ApostaModel[] = [];
  refresher : Subscription;
  transform(data: any, args?: any): any {
    let d = new Date(data)
    return moment(d).format('DD/MM/YYYY hh:mm')

  }
  ngOnInit() {

    this.refresher = Observable.timer(5000).repeat().subscribe(() => {
      this.apostaService.getApostas().then(c => {
        this.apostas = c;
      });
    })

    
  }

  inserirAposta(){
    console.log(this.dezenas);
    this.apostaService.inserirAposta(this.dezenas).then(c => swal("Aposta criada com sucesso!"));
  }

  gerarDezenas(){
    this.apostaService.gerarDezenas().then(c => swal("Aposta criada com sucesso!"));
  }

}
