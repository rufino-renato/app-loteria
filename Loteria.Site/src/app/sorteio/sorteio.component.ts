import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

import { SorteioService } from '../services/sorteio.service';
import { SorteioModel } from '../models/sorteio.model';

@Component({
  selector: 'sorteio-container',
  templateUrl: './sorteio.component.html',
  styleUrls: ['../app.component.css']
})
export class SorteioComponent implements OnInit {

  sorteio : SorteioModel = new SorteioModel();
  dezenas: string;
  
  constructor(private sorteioService : SorteioService) { }

  ngOnInit() {
  }

  inserirSorteio(){
    this.sorteioService.inserirSorteio().then(s => {
      this.sorteio = s;
      swal("Sorteio realizado com sucesso!");
    });
  }

}
