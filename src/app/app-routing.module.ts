import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewReadingComponent } from './components/new-reading/new-reading.component';
import { ReadingResultsComponent } from './components/reading-results/reading-results.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new-reading', component: NewReadingComponent },
  { path: 'reading-result', component: ReadingResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
