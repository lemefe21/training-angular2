import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  moduleId: module.id,
  selector: 'cursos-lista',
  /*template: `
      <h3>Cursos {{ nomePortal }}</h3>
      <ul>
        <li *ngFor="let curso of cursos">
          {{ curso }}
        </li>
      </ul>
  `*/
  templateUrl: 'cursos.component.html'
  //providers e diretivas vão para o app.module RC5
})
export class CursosComponent {

  nomePortal = 'loiane.traning';

  cursos;

  constructor(cursosService: CursosService){
    this.cursos = cursosService.getCursos();
  }
}
