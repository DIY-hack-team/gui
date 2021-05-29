import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AppbarRoute } from './models/appbar-route';
import { AppbarRoutesService } from './appbar-routes.service';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppbarComponent implements OnInit {
  public isCollapsed = true;
  public routes: Array<AppbarRoute> = [];
  public setPath: Function;
  public isActive: Function;

  constructor(appbarRoutes: AppbarRoutesService) {
    this.routes = appbarRoutes.routes;
    this.setPath = appbarRoutes.setPath.bind(appbarRoutes);
    this.isActive = appbarRoutes.isActive.bind(appbarRoutes);
  }

  ngOnInit(): void {}
}
