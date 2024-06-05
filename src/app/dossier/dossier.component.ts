import { Component } from '@angular/core';
import { ChangementStatutComponent } from './changement-statut/changement-statut.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrl: './dossier.component.css'
})
export class DossierComponent {


  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(ChangementStatutComponent);
  }
}
