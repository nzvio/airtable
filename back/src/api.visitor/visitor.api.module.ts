import { Module } from "@nestjs/common";
import { AirtableModule } from "./airtable/airtable.module";

@Module({
    imports: [
        AirtableModule,
    ],    
})
export class VisitorAPIModule {}
