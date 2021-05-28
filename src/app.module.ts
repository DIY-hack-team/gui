import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TeamsComponent } from './components/teams/teams.component';

import { ApiAuthService } from './api/auth/api-auth.service';
import { ApiProjectsService } from './api/projects/api-projects.service';
import { ProjectsComponent } from './components/projects/projects.component';
import { ApiTeamsService } from './api/teams/api-teams.service';

function initApp(location: Location, apiAuth: ApiAuthService): Function {
  return async (): Promise<void> => {
    if (location.path() !== '/login') {
      await apiAuth.auth();
    }
    return Promise.resolve();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    LoginComponent,
    HomeComponent,
    TeamsComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full',
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        pathMatch: 'full',
      },
      {
        path: 'teams',
        component: TeamsComponent,
        pathMatch: 'full',
      },
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
    ]),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [Location, ApiAuthService],
      multi: true,
    },
    ApiAuthService,
    ApiProjectsService,
    ApiTeamsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
