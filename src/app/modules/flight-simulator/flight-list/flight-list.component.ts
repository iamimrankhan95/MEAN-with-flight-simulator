import { ServerResponse } from './../../../shared/models/dto/serverResponse';
import { IFlight } from './../../../shared/models/flight.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FlightSimulatorHttpService } from '../flight-simulator-http.service';
import { FlightSimulatorService } from '../flight-simulator.service';
import { FlightSimulatorRequest } from '../../../shared/models/dto/flight-simulator-request.dto';
import { FlightSimulatorResponseObject } from '../../../shared/models/dto/flight-simulator-response.dto';
import { finalize } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  filterQuery = '';
  minAmount = '';
  maxAmount = '';
  flightSimulatorRequest: FlightSimulatorRequest;
  flights: Observable<{ flights: IFlight[] }>;
  filteredFlights: Observable<{ flights: IFlight[] }>;
  constructor(private route: ActivatedRoute,
    private router: Router, private toastr: ToastrService,
    private flightSimulatorHttpService: FlightSimulatorHttpService,
    private flightSimulatorService: FlightSimulatorService,
    private store: Store<{ flights: { flights: IFlight[] } }>
  ) {
    this.flightSimulatorRequest = {
      DepartureAirportCode: '',
      ArrivalAirportCode: '',
      DepartureDate: '',
      ReturnDate: ''
    }
  }

  ngOnInit(): void {
    this.filteredFlights = this.store.select('flights');
    // this.route.queryParams.subscribe(
    //   (params: Params) => {
    //     this.flightSimulatorRequest.DepartureAirportCode = params['DepartureAirportCode'] ? params['DepartureAirportCode'] : '';
    //     this.flightSimulatorRequest.ArrivalAirportCode = params['ArrivalAirportCode'] ? params['ArrivalAirportCode'] : '';
    //     this.flightSimulatorRequest.DepartureDate = params['DepartureDate'] ? params['DepartureDate'] : '';
    //     this.flightSimulatorRequest.ReturnDate = params['ReturnDate'] ? params['ReturnDate'] : '';

    //     this.flightSimulatorService.getFlights(this.flightSimulatorRequest);
    //     this.flightSimulatorService.getFlightUpdateListener().subscribe(
    //       flights => {
    //         this.flightSimulatorService.flights = flights;
    //         this.filteredFlights = flights;
    //       }
    //     )
    //   }
    // );
  }

  // filter() {
  //   this.filteredFlights = this.flightSimulatorService.flights
  //     .filter(x => +this.maxAmount >= x.TotalAmount && x.TotalAmount >= +this.minAmount);
  // }

  // clearFilter() {
  //   this.maxAmount = this.minAmount = null;
  //   this.filteredFlights = this.flightSimulatorService.flights;
  // }

  // onDelete(id) {
  //   this.flightSimulatorService.deleteFlight(id, this.flightSimulatorRequest);
  // }
}
