import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports:[
    HomePageComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
