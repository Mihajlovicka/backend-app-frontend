import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accommodations-list',
  templateUrl: './accommodations-list.component.html',
  styleUrls: ['./accommodations-list.component.css']
})
export class AccommodationsListComponent {
  router = inject(Router);

  public goToCreateNew() {
    this.router.navigate(['/accommodations/create']);
  }
}
