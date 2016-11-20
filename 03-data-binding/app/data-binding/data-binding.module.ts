import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputPropertyComponent } from './input-property.component';
import { OutputPropertyComponent } from './output-property.component';
import { DataBindingComponent } from './data-binding.component';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ //directives
        DataBindingComponent, //exemplo-data-binding
        InputPropertyComponent, //curso
        OutputPropertyComponent ], //directives
    exports: [ DataBindingComponent ] //expôe/faz o export do componente principal
})
export class DataBindingModule { }