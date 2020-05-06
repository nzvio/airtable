import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

import { Record } from '../../../model/orm/record.model';
import { RecordsRepository } from '../../../services/repositories/records.repository';
import { IParam } from '../../../model/param.interface';

@Component({
    selector: "record-page",
    templateUrl: "./record.page.html",
})
export class RecordPage implements OnInit {
    public ready: boolean = false;
    public recordInfo: IParam[] = [];

    constructor(
        private recordsRepository: RecordsRepository,
        private route: ActivatedRoute,	
        private router: Router,
    ) {}

    public ngOnInit(): void {
        this.route.params.subscribe(async p => {
            try {
                let id: string = p["id"];
                await this.recordsRepository.load("Table 1");
                let record: Record = this.recordsRepository.xlFull.find(x => x.id === id) || null;

                if (!record) {
                    console.log("404");
                    this.router.navigateByUrl("/");
                } else {
                    for (let field in record) {
                        this.recordInfo.push({p: field, v: record[field]});
                    }

                    this.ready = true;
                }
            } catch (err) {
                console.log(err);
            }
            
        });        
    }
}
