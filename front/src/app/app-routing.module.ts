import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './section.components/home/home.page';
import { AirModule } from './section.components/air/air.module';

const routes: Routes = [
	{path:"", component: HomePage},
	{path: "air", loadChildren: () => AirModule}, 
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
