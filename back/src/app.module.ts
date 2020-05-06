import { Module } from '@nestjs/common';
import { VisitorAPIModule } from './api.visitor/visitor.api.module';

@Module({
	imports: [VisitorAPIModule],  
})
export class AppModule {}
