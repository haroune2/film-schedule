import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { AboutComponent } from './about/about.component';
import { DailyScheduleComponent } from './daily-schedule/daily-schedule.component';
import { FilmScheduleComponent } from './film-schedule/film-schedule.component';

const routes: Routes = [
  { path: 'film-list', component: FilmScheduleComponent },
  { path: 'film-screening', component: FilmScheduleComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'daily-schedule', component: DailyScheduleComponent },

  { path: 'collaborators', component: CollaboratorsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
