import { Controller, Body, Post } from "@nestjs/common";

import { AirtableService } from "./airtable.service";
import { IAnswer } from "../../model/answer.interface";
import { ITableRecordsGetDTO } from "./dto/tablerecordsget.dto";
import { Record } from "../../model/record";

@Controller('api/visitor/airtable')
export class AirtableController {
    constructor (private airtableService: AirtableService) {}  

    @Post("tablerecords")
    public tableRecords(@Body() dto: ITableRecordsGetDTO): Promise<IAnswer<Record[]>> {
        return this.airtableService.tableRecords(dto.tableName);
    }
}
