import { Injectable } from "@nestjs/common";
import * as Airtable from "airtable";

import { IAnswer } from "../../model/answer.interface";
import { Record } from "../../model/record";

@Injectable()
export class AirtableService {
    private base: any = null;
    
    constructor() {                
        this.base = new Airtable({endpointUrl: 'https://api.airtable.com', apiKey: process.env.AIRTABLE_API_KEY}).base('appvG3fbqs7MuC561');        
    }

    public async tableRecords(tableName: string): Promise<IAnswer<Record[]>> {
        try {
            let data: Record[] = await this.readTable(tableName);
            return {statusCode:200, data};
        } catch (err) {
            let errTxt: string = `Error in AirtableService.records: ${String(err)}`;
            console.log(errTxt);
            return {statusCode: 500, error: errTxt};
        }
    }

    private readTable(tableName: string): Promise<Record[]> {
        return new Promise((resolve, reject) => {            
            let res: Record[] = [];            
            let onPage = (airrecords, fetchNext) => {                
                airrecords.forEach(airrecord => res.push(this.buildRecord(airrecord)));
                fetchNext();
            };
            let onComplete = (err) => err ? reject(err) : resolve(res);            
            this.base(tableName).select({view: "Grid view"}).eachPage(onPage, onComplete);
        });
    }

    private buildRecord(airrecord: any): Record {
        let record: Record = new Record();

        for (let field in record) {            
            record[field] = airrecord.get(field) || "";
        }

        return record;
    }
}
