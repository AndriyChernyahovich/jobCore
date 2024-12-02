import { CommonModule } from '@angular/common';
import { Component, inject, Input, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateJobDialogComponent } from '../create-job-dialog/create-job-dialog.component';
import {LoadingComponent} from "../loading/loading.component";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {PaginatorComponent} from "../paginator/paginator.component";
import {Pagination} from "../../models";

@Component({
    selector: 'app-table',
    imports: [CommonModule, LoadingComponent, MatProgressSpinner, PaginatorComponent],
    templateUrl: './table.component.html',
    styleUrl: './table.component.scss',
    standalone: true
})
export class TableComponent<T> {
  @Input() columnName: string[] = [];
  @Input() data: T[] = [];
  @Input() customTemplate?: TemplateRef<any>;
  @Input() loading: boolean = false;
  @Input() pagination?: Pagination;

  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(CreateJobDialogComponent);
  }
}
