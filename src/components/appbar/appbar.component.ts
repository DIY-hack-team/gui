import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppbarComponent implements OnInit {
  public isCollapsed = true;

  constructor(private location: Location) {}

  ngOnInit(): void {}

  public setPath(path: string): string | null {
    return this.isActive(path) ? null : path;
  }

  public isActive(path: string): boolean {
    return path === this.location.path();
  }
}
