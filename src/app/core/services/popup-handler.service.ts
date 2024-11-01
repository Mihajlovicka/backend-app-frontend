import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PopupComponent } from 'src/app/shared/popup/popup.component';

@Injectable({
  providedIn: 'root',
})
export class PopupHandlerService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackbar(message: string, type: 'success' | 'error' = 'error') {
    this.snackBar.openFromComponent(PopupComponent, {
      data: { message, type },
      panelClass: type,
      duration: 5000,
    });
  }
}
