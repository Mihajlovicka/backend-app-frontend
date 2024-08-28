import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    UserService
  ],
  exports:[
    MaterialModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class CoreModule { }
