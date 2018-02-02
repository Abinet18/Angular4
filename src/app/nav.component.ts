import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
      <a [routerLink]="['/']" class="btn btn-info col-xs-12">Home</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
