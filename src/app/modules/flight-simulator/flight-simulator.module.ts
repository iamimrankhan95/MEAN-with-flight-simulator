import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightSimulatorRoutingModule } from './flight-simulator-routing.module';
import { SharedModule } from '../../shared/modules/shared/shared.module';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightSimulatorComponent } from './flight-simulator-form/flight-simulator.component';
import { DataTableModule } from 'angular2-datatable';
import { CreateFlightComponent } from './create-flight/create-flight.component';

@NgModule({
  declarations: [FlightSimulatorComponent, FlightListComponent, CreateFlightComponent],
  imports: [
    CommonModule,
    SharedModule,
    FlightSimulatorRoutingModule,
    DataTableModule
  ]
})
export class FlightSimulatorModule { }
