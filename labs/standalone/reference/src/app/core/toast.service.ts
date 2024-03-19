import { Injectable } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    setTimeout(() => this.snackBar.open(message, action, { duration: 2000 }), 0);
  }
}
