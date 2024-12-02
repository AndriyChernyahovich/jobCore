import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NewJobDialogComponent } from '../../shared/new-job-dialog/new-job-dialog.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, MatDialogModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  label = '+ New job';
  styleClass = 'bg-green'


  constructor(  private dialog: MatDialog){}


  openDialog() {
    this.dialog.open(NewJobDialogComponent, {
      height: '80%'
    })
  }
}
