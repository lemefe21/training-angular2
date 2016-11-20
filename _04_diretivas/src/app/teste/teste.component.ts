import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit {

  //componente criado alterando na geração o tipo de pré-processador do .css
  //ng set defaults.styleExt scss

  constructor() { }

  ngOnInit() {
  }

}
