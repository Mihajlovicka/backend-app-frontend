import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { CreateAccommodationComponent } from './create-accommodation/create-accommodation.component';
import { AccmodationRoutingModule } from './accommodation-routing.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'; // For [(ngModel)] if needed
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    CreateAccommodationComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AccmodationRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatCheckboxModule
  ]
})
export class AccommodationModule { }
