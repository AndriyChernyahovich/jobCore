import { CommonModule } from '@angular/common';
import {Component, inject, Input, Output, TemplateRef, EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateJobDialogComponent } from '../create-job-dialog/create-job-dialog.component';
import {LoadingComponent} from "../loading/loading.component";
import {Pagination} from "../../models";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
    selector: 'app-table',
    imports: [CommonModule, LoadingComponent, MatPaginator],
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

  @Output() changePage: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

    handlePageEvent($event: PageEvent): void {
      this.changePage.emit($event)
    }
}
