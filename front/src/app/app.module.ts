import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { HomeModule } from './section.components/home/home.module';
import { CCModule } from './common.components/cc.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
    	BrowserModule,
    	AppRoutingModule,
		HttpClientModule,

		ServicesModule,
		HomeModule,
		CCModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
