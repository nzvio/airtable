import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

import { IAnswer } from '../model/answer.interface';
import { Record } from '../model/orm/record.model';

@Injectable()
export class DataService {
    private root: string = "http://bk.air.vio.net.ua/api/visitor";
        
    constructor (private http: HttpClient) {}  
    
    public records(tableName: string): Observable<IAnswer<Record[]>> {return this.sendRequest("POST", "airtable/tablerecords", {tableName});}
    
    private sendRequest (method: string, url: string, body: Object = null,): Observable<any> | null {        
        if (method === "GET") {
            return this.http.get (`${this.root}/${url}`);                
        } else if (method === "POST") {
            return this.http.post (`${this.root}/${url}`, body);
        }
        
        return null;                  
    }    
}
