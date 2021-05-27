import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppbarComponent } from './appbar/appbar.component';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamsFormComponent } from './teams/teams-form.component';

import { TeamsService } from './teams/teams.service';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    HomeComponent,
    TeamsComponent,
    TeamsFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forRoot([
      {
        path: 'teams',
        component: TeamsComponent,
        pathMatch: 'full',
      },
      {
        path: 'teams/form',
        component: TeamsFormComponent,
        pathMatch: 'full',
      },
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
    ]),
  ],
  providers: [TeamsService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
