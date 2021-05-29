import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { AppbarRoutesService } from '../appbar/appbar-routes.service';
import { AppbarRoute } from '../appbar/models/appbar-route';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  public routes: Array<AppbarRoute> = [];

  constructor(appbarRoutes: AppbarRoutesService) {
    this.routes = appbarRoutes.routes;
  }

  ngOnInit(): void {}
}
