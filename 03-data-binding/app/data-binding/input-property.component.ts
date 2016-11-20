import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'curso',
  template: '{{ nomeCurso }}'//,
  //inputs: ['nomeCurso']
  //providers e diretivas vão para o app.module
})
export class InputPropertyComponent {

  @Input('nome') nomeCurso : string = '';
  //[nome] passa a ser utilizado como atributo do componente

  constructor() {
  }

}
