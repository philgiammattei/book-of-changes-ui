import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'ngx-pipes';
import { LineComponent } from './components/line/line.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NewReadingComponent } from './components/new-reading/new-reading.component';
import { ReadingResultsComponent } from './components/reading-results/reading-results.component';
import { HomeComponent } from './components/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { AllHexagramsComponent } from './components/all-hexagrams/all-hexagrams.component';
import { HexagramComponent } from './components/hexagram/hexagram.component';
import { HexagramDetailComponent } from './components/hexagram-detail/hexagram-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LineComponent,
    NewReadingComponent,
    ReadingResultsComponent,
    HomeComponent,
    AllHexagramsComponent,
    HexagramComponent,
    HexagramDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgPipesModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
