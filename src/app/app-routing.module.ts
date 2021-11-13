import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllHexagramsComponent } from './components/all-hexagrams/all-hexagrams.component';
import { HomeComponent } from './components/home/home.component';
import { NewReadingComponent } from './components/new-reading/new-reading.component';
import { ReadingResultsComponent } from './components/reading-results/reading-results.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new-reading', component: NewReadingComponent },
  { path: 'reading-result', component: ReadingResultsComponent },
  { path: 'all-hexagrams', component: AllHexagramsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
