import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApiService } from './shared/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { HeaderComponent } from './header/header.component';
import { TVComponent } from './tv/tv.component';
import { SeriesComponent } from './tv/series/series.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MovieComponent,
    HeaderComponent,
    TVComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
