import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'sg-responsible-dashboard',
  template: `
      <sg-drawer-appbar-base>
          <header>Обзор: ответственное лицо</header>
          <sg-computer-grid></sg-computer-grid>
      </sg-drawer-appbar-base>`,
})
export class ResponsibleDashboardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
