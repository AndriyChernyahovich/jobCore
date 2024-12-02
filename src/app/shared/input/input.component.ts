import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InputService, JobRole } from './input.service';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit {
  roles: JobRole[] = [];
  weekOptions: string[] = ['This week', 'Second week', 'Specific dates'];
  selectedRole = this.roles[0];
  showSelectDayMenu = false;
  chosenRole: string = '';

  constructor(private inputService: InputService) {}

  ngOnInit(): void {
    this.inputService.getJobRoles().subscribe(roles => this.roles = roles);
  }

  onSpecificDay(event: Event) {
    const selectValue = (event.target as HTMLSelectElement).value;
    this.showSelectDayMenu = selectValue === 'Specific dates'
  }

  handleChoseRole(event: Event) {
    this.chosenRole = (event.target as HTMLSelectElement).value;
    this.inputService.setChosenRole(this.chosenRole);
  }
}
