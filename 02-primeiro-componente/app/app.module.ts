import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

//agora novos componentes são importados dentro do app.module
import { MeuPrimeiroComponent } from './primeiro/meu-primeiro.component';

//import { CursosComponent } from './cursos/cursos.component';
//criado um modulo do curso somente para declarar as dependências 
import { CursosModule } from './cursos/cursos.module';

@NgModule({
    imports: [ BrowserModule, CursosModule ],
    declarations: [ AppComponent, MeuPrimeiroComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }