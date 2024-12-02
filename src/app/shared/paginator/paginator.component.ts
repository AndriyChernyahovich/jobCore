import { Component, Input } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
    selector: 'app-paginator',
    imports: [MatPaginatorModule],
    templateUrl: './paginator.component.html',
    standalone: true,
    styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  @Input() length: number | undefined = 0;
  @Input() pageSize: number | undefined = 0;
}
