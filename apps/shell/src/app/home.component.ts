import { Component } from "@angular/core";
import { AuthService } from '@namespace/auth';

@Component({
  selector: 'home-component',
  template: `
    <h1>Главная страница</h1>
    userId: {{ auth.userId }}
  `
})
export class HomeComponent {
  constructor(public auth: AuthService) {}

}
