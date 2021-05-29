import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { FiltersComponent } from './components/filters/filters.component';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeesEditItemComponent } from './components/employees/edit-component/employees-edit-item.component';
import { EmployeesViewItemComponent } from './components/employees/view-component/employees-view-item.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamsItemComponent } from './components/teams/teams-item.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsEditItemComponent } from './components/products/edit-component/products-edit-item.component';
import { ProductsViewItemComponent } from './components/products/view-component/products-view-item.component';
import { DomainsComponent } from './components/domains/domains.component';

import { ApiAuthService } from './api/auth/api-auth.service';
import { ApiEmployeesService } from './api/employees/api-employees.service';
import { ApiTeamsService } from './api/teams/api-teams.service';
import { ApiProjectsService } from './api/projects/api-projects.service';
import { ApiProductsService } from './api/products/api-products.service';
import { ApiDomainsService } from './api/domains/api-domains.service';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { UnauthorizedInterceptor } from './interceptors/unauthorized.interceptor';
import { AppbarRoutesService } from './components/appbar/appbar-routes.service';

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
    FiltersComponent,

    LoginComponent,
    HomeComponent,

    EmployeesComponent,
    EmployeesEditItemComponent,
    EmployeesViewItemComponent,
    TeamsComponent,
    TeamsItemComponent,
    ProjectsComponent,
    ProductsComponent,
    DomainsComponent,
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
        path: 'employees',
        children: [
          {path: "", component: EmployeesComponent, pathMatch: 'full'},
          {path: ':ldap/view', component: EmployeesViewItemComponent, pathMatch: 'full'},
          {path: ':ldap/edit', component: EmployeesEditItemComponent, pathMatch: 'full'},
        ],
      },
      {
        path: 'teams',
        component: TeamsComponent,
        pathMatch: 'full',
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        pathMatch: 'full',
      },
      {
        path: 'products',
        component: ProductsComponent,
        pathMatch: 'full',
      },
      {
        path: 'domains',
        component: DomainsComponent,
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
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true,
    },
    AppbarRoutesService,

    ApiAuthService,
    ApiEmployeesService,
    ApiTeamsService,
    ApiProjectsService,
    ApiProductsService,
    ApiDomainsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
