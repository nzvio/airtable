import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [
        HeaderComponent,        
    ],
    exports: [
        HeaderComponent,        
    ],    
})
export class CCModule {    
}
