import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesComponent } from './series/series.component';


const routes: Routes = [
  {path:"",component:SeriesComponent},
  { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
