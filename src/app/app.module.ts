import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { FilmScheduleComponent } from './film-schedule/film-schedule.component';
import { FormsModule } from '@angular/forms';
import { FilmService } from './film.service';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { DailyScheduleComponent } from './daily-schedule/daily-schedule.component';



@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    FilmScheduleComponent,
    NavigationComponent,
    AboutComponent,
    ContactComponent,
    CollaboratorsComponent,
    DailyScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,   // Ajouter FormsModule ici

    AppRoutingModule,HttpClientModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
