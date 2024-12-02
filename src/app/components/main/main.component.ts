import { Component, inject, OnInit, signal } from '@angular/core';
import { InputComponent } from '../../shared/input/input.component';
import { TableComponent } from '../../shared/table/table.component';
import { MainService, Workers } from './main.service';
import { DefaultImagePipe } from '../../pipes/default-image.pipe';
import { InputService } from '../../shared/input/input.service';
import { map, switchMap } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { PageEvent } from "@angular/material/paginator";
import {CreateJobDialogComponent} from "../../shared/create-job-dialog/create-job-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    InputComponent,
    TableComponent,
    DefaultImagePipe,
    AsyncPipe,
    JsonPipe,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  private readonly mainService = inject(MainService);

  loading$ = signal(true);
  pagination?: any;
  columnName: string[] = ['', 'Rate', 'Journey', 'Availability', 'Book'];
  defaultImage = 'assets/icons/circle.svg';

  readonly dialog = inject(MatDialog);

  constructor(
      private inputService: InputService
  ) {}

  public workers$ = this.mainService.getAvailebleTeachers().pipe(
      map((workers: Workers) => {
        this.loading$.set(false);
        return {
          ...workers,
          pagination: {
            pageSize: workers.pageSize as number,
            totalCount: workers.totalCount as number,
            currentPage: (workers.currentPage as number - 1) as number,
          }
        };
      })
  );

  ngOnInit(): void {}

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = this.defaultImage;
  }

  onPageChange(event: PageEvent): void {
    this.pagination = event;
    this.loading$.set(true);
    this.workers$ = this.mainService.getAvailebleTeachers(`pageNo=${event.pageIndex + 1}`).pipe(
        map((workers: Workers) => {
          this.loading$.set(false);
          return {
            ...workers,
            pagination: {
              pageSize: workers.pageSize as number,
              totalCount: workers.totalCount as number,
              currentPage: event.pageIndex,
            }
          };
        })
    );
  }

  openDialog(): void {
    this.dialog.open(CreateJobDialogComponent);
  }
}
