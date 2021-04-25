import { Component } from "@angular/core";
import { AuthService } from '@namespace/auth';

@Component({
  selector: 'namespace-flights',
  template: `
    <h1>Рейсы</h1>
    userId: {{ auth.userId }}
  `

})
export class FlightsComponent {
  constructor(public auth: AuthService) {}
}
