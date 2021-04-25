import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FlightsComponent } from "./flights.component";


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: FlightsComponent,
      }
    ])
  ],
})
export class FlightsModule {}
