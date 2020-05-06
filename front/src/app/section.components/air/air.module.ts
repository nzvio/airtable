import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RecordsPage } from './records/records.page';
import { RecordPage } from './record/record.page';

let routes = RouterModule.forChild ([        
    {path: "", component: RecordsPage, pathMatch: "full"},
    {path: ":id", component: RecordPage},
]);

@NgModule({
    imports: [
        CommonModule,
        routes,
    ],
    declarations: [
        RecordsPage,
        RecordPage,
    ],
    exports: [
        RecordsPage,
        RecordPage,
    ],
    providers: []
})
export class AirModule {}
