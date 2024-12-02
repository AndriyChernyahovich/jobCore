import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { OpenJobsComponent } from './components/open-jobs/open-jobs.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'open-jobs', component: OpenJobsComponent}
];
