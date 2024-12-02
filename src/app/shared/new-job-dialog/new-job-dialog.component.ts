import { Component, inject, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from '../button/button.component';
import { InputService, JobRole } from '../input/input.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-job-dialog',
  imports: [
    CommonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatTimepickerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ButtonComponent,
  ],
  templateUrl: './new-job-dialog.component.html',
  styleUrl: './new-job-dialog.component.scss',
})
export class NewJobDialogComponent implements OnInit {
  label = 'Create job';
  styleClass = 'bg-blue';
  formControlFor = new FormControl<Date | null>(null);
  formControlTo = new FormControl<Date | null>(null);
  roles: JobRole[] = [];
  jobType: string[] = ['A Daily Supply job','A Long Term Contract','A Permanent Job'];

  readonly dialogRef = inject(MatDialogRef<NewJobDialogComponent>);

  constructor(private inputServise: InputService) {}
  ngOnInit(): void {
    this.inputServise.roles$.subscribe(el => this.roles = el)
    console.log('job dialog',this.roles)
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
