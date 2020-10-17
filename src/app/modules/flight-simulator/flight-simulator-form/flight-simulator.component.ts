import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FlightSimulatorHttpService } from '../flight-simulator-http.service';
import { FlightSimulatorService } from '../flight-simulator.service';

@Component({
  selector: 'app-flight-simulator',
  templateUrl: './flight-simulator.component.html',
  styleUrls: ['./flight-simulator.component.css']
})
export class FlightSimulatorComponent implements OnInit {

  today = new Date();
  fromMinDate = { year: this.today.getFullYear() - 100, month: 1, day: 1 };
  fromMaxDate = { year: this.today.getFullYear() + 100, month: 1, day: 1 };
  isFlightFormSubmitted = false;

  flightFrm = this.fb.group({
    DepartureAirportCode: ['',
      [Validators.required, Validators.maxLength(3), Validators.minLength(3), Validators.pattern('^$|^[A-Za-z0-9]+')]],
    ArrivalAirportCode: ['',
      [Validators.required, Validators.maxLength(3), Validators.minLength(3), Validators.pattern('^$|^[A-Za-z0-9]+')]],
    DepartureDate: ['', [Validators.required]],
    ReturnDate: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private flightSimulatorHttpService: FlightSimulatorHttpService,
    private flightSimulatorService: FlightSimulatorService
  ) { }

  ngOnInit(): void {
  }

  reset() {
    this.isFlightFormSubmitted = false;
    this.flightFrm.reset();
  }

  onSubmit() {
    this.isFlightFormSubmitted = true;
    if (!this.flightFrm.valid) {
      this.toastr.error('Form validation failed', 'Error');
      console.log('not valid', this.flightFrm);
      return;
    }

    console.log('valid', this.flightFrm.value);

    const flightFormValue = this.flightFrm.value;
    // this.flightSimulatorHttpService.getFlightSimulatorResponseObjects(flightFormValue)
    //   .subscribe(
    //     (flights: FlightSimulatorResponseObject[]) => {
    //       this.flightSimulatorService.flights = flights;
    //       this.router.navigate(['/list', {
    //         queryParams: {
    //           DepartureAirportCode: flightFormValue.DepartureAirportCode,
    //           ArrivalAirportCode: flightFormValue.ArrivalAirportCode,
    //           DepartureDate: flightFormValue.DepartureDate,
    //           ReturnDate: flightFormValue.DepartureDate,
    //         }
    //       }]);
    //     }
    //   );

    this.router.navigate(['list'], {
      relativeTo: this.route,
      queryParams: {
        DepartureAirportCode: flightFormValue.DepartureAirportCode,
        ArrivalAirportCode: flightFormValue.ArrivalAirportCode,
        DepartureDate: flightFormValue.DepartureDate,
        ReturnDate: flightFormValue.DepartureDate,
      }
    });
  }

}
