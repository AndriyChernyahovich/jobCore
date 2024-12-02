import {Component, Input} from '@angular/core';
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-loading',
  imports: [
    MatProgressSpinner
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
  standalone: true,
})
export class LoadingComponent {
  @Input() loading: boolean = false;
}
