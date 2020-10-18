import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FlightSimulatorHttpService } from '../flight-simulator-http.service';
import { FlightSimulatorService } from '../flight-simulator.service';
import { FlightSimulatorRequest } from '../../../shared/models/dto/flight-simulator-request.dto';
import { FlightSimulatorResponseObject } from '../../../shared/models/dto/flight-simulator-response.dto';
import { NgxUiLoaderService } from 'ngx-ui-loader';

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
  flights: FlightSimulatorResponseObject[];
  filteredFlights: FlightSimulatorResponseObject[];
  constructor(private route: ActivatedRoute,
    private router: Router, private toastr: ToastrService,
    private flightSimulatorHttpService: FlightSimulatorHttpService,
    private flightSimulatorService: FlightSimulatorService,
    private ngxLoader: NgxUiLoaderService) {
    this.flightSimulatorRequest = {
      DepartureAirportCode: '',
      ArrivalAirportCode: '',
      DepartureDate: '',
      ReturnDate: ''
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.ngxLoader.start();
        this.flightSimulatorRequest.DepartureAirportCode = params['DepartureAirportCode'] ? params['DepartureAirportCode'] : '';
        this.flightSimulatorRequest.ArrivalAirportCode = params['ArrivalAirportCode'] ? params['ArrivalAirportCode'] : '';
        this.flightSimulatorRequest.DepartureDate = params['DepartureDate'] ? params['DepartureDate'] : '';
        this.flightSimulatorRequest.ReturnDate = params['ReturnDate'] ? params['ReturnDate'] : '';
        this.flightSimulatorHttpService.getFlightSimulatorResponseObjects(this.flightSimulatorRequest)
          .subscribe(
            (flightSimulatorResponseObject: FlightSimulatorResponseObject[]) => {
              this.flightSimulatorService.flights = flightSimulatorResponseObject;
              this.filteredFlights = flightSimulatorResponseObject;
              this.ngxLoader.stop();
            }
          );
      }
    );
  }

  filter() {
    this.filteredFlights = this.flightSimulatorService.flights
      .filter(x => +this.maxAmount >= x.TotalAmount && x.TotalAmount >= +this.minAmount);
  }

  clearFilter() {
    this.maxAmount = this.minAmount = null;
    this.filteredFlights = this.flightSimulatorService.flights;
  }
}
