import { Component, OnInit } from "@angular/core";
import { RecordsRepository } from '../../../services/repositories/records.repository';
import { Record } from '../../../model/orm/record.model';

@Component({
    selector: "records-page",
    templateUrl: "records.page.html",
})
export class RecordsPage implements OnInit {
    public ready = false;

    constructor(private recordsRepository: RecordsRepository) {}

    get records(): Record[] {return this.recordsRepository.xlFull;}

    public async ngOnInit(): Promise<void> {
        try {
            await this.recordsRepository.load("Table 1");
            this.ready = true;
        } catch (err) {
            console.log(err);
        }
    }
}