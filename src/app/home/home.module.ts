import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';


@NgModule({
  declarations: [HomeComponent,Component1Component,Component2Component,Component3Component,Component3Component,Component4Component],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
