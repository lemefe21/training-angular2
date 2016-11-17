import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <meu-primeiro-componente></meu-primeiro-componente>
        <cursos-lista></cursos-lista>
    `
    //providers e diretivas vão para o app.module RC5
})
export class AppComponent { }
