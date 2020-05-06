import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RecordsPage } from './records/records.page';

let routes = RouterModule.forChild ([        
    {path: "", component: RecordsPage, pathMatch: "full"},
]);

@NgModule({
    imports: [
        CommonModule,
        routes,
    ],
    declarations: [
        RecordsPage,
    ],
    exports: [
        RecordsPage,
    ],
    providers: []
})
export class AirModule {}
