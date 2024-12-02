import { Component, inject, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonComponent } from "../button/button.component";
import { MainService, Workers } from '../../components/main/main.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-create-job-dialog',
  imports: [MatDialogModule, ButtonComponent],
  templateUrl: './create-job-dialog.component.html',
  styleUrl: './create-job-dialog.component.scss',
})
export class CreateJobDialogComponent implements OnInit {
private readonly mainService = inject(MainService);

  workers$ = this.mainService.getAvailebleTeachers();
  constructor() {

  }
  ngOnInit(): void {
  }
}
