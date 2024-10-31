import { Component, Inject } from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: { message: string; type: string },
    public snackBarRef: MatSnackBarRef<PopupComponent>
  ) {}
}
