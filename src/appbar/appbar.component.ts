import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppbarComponent implements OnInit {
  public isCollapsed = true;

  constructor(private location: Location) {}

  ngOnInit(): void {}

  public setPath(path: string): string | null {
    return path === this.location.path() ? null : path;
  }
}
