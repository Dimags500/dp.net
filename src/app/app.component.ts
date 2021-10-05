import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'comp-crm2';

  constructor(
    private router: Router
  ) { }

  navigateTo($event: string) {

    this.router.navigate([$event])
  }
}
