import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightSimulatorComponent } from './flight-simulator-form/flight-simulator.component';
import { FlightListComponent } from './flight-list/flight-list.component';

const routes: Routes = [
  { path: '', component: FlightSimulatorComponent },
  { path: 'list', component: FlightListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightSimulatorRoutingModule { }
