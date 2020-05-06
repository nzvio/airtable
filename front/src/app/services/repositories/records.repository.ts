import { Injectable } from "@angular/core";
import { Record } from '../../model/orm/record.model';
import { DataService } from '../data.service';
import { Repository } from './_repository';

@Injectable()
export class RecordsRepository extends Repository<Record> {    
    constructor(private dataService: DataService) {
        super();
    }

    public load(tableName: string): Promise<void> {
        return new Promise((resolve, reject) => {
            if (new Date().getTime() - this.fullLoadedAt < this.ttl) {
                resolve();
            } else {
                this.dataService.records(tableName).subscribe(res => {
                    if (res.statusCode === 200) {
                        this.xlFull = res.data.length ? res.data.map(d => new Record().build(d)) : [];
                        this.fullLoadedAt = new Date().getTime();
                        resolve();
                    } else {
                        reject(res.error);
                    }
                }, err => {
                    reject(err.message);
                    console.log(err);
                });                
            }            
        });
    }
}
