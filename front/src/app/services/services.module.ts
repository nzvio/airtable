import { NgModule } from '@angular/core';

import { DataService } from './data.service';
import { RecordsRepository } from './repositories/records.repository';

@NgModule({
    imports: [                
        
    ],
    declarations: [],
    exports: [],
    providers: [
        DataService,        
        RecordsRepository,
    ],
})
export class ServicesModule {}
