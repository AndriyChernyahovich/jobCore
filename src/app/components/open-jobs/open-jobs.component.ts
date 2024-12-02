import { Component } from '@angular/core';
import { TableComponent } from "../../shared/table/table.component";

@Component({
  selector: 'app-open-jobs',
  imports: [TableComponent],
  templateUrl: './open-jobs.component.html',
  styleUrl: './open-jobs.component.scss'
})
export class OpenJobsComponent {
  columnName: string[] = ['filled', 'active offers', 'applications', 'created'];
  data: any[] = [];

}
