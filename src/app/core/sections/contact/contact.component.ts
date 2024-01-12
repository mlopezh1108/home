import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly snackbar = inject(MatSnackBar);

  copy() {
    this.snackbar.open('Email copiado', 'Cerrar', { duration: 4000 });
  }

  goTo(url: string) {
    window.open(url, '_blank')
  }
}
