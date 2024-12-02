import {Component, inject, OnInit, signal} from '@angular/core';
import { InputComponent } from '../../shared/input/input.component';
import { TableComponent } from '../../shared/table/table.component';
import { MainService, Workers } from './main.service';
import { DefaultImagePipe } from '../../pipes/default-image.pipe';
import { InputService } from '../../shared/input/input.service';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';
import { map } from 'rxjs';
import {AsyncPipe, JsonPipe} from '@angular/common';
import {LoadingComponent} from "../../shared/loading/loading.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    InputComponent,
    TableComponent,
    DefaultImagePipe,
    PaginatorComponent,
    AsyncPipe,
    JsonPipe,
    LoadingComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  private readonly mainService = inject(MainService);

  loading$ = signal(true);
  columnName: string[] = ['', 'Rate', 'Journey', 'Availability', 'Book'];
  defaultImage = 'assets/icons/circle.svg';

  constructor(
    private inputService: InputService
  ) {}

  public workers$ = this.mainService.getAvailebleTeachers().pipe(
    map((workers: Workers) => {
      this.loading$.set(false);
      return workers;
    })
  );

  ngOnInit(): void {
    this.workers$.subscribe(workers => console.log(workers));
  }

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = this.defaultImage;
  }
}
