import { ServerResponse } from './../../../shared/models/dto/serverResponse';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FlightSimulatorHttpService } from '../flight-simulator-http.service';
import { FlightSimulatorService } from '../flight-simulator.service';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit {

  today = new Date();
  fromMinDate = { year: this.today.getFullYear() - 100, month: 1, day: 1 };
  fromMaxDate = { year: this.today.getFullYear() + 100, month: 1, day: 1 };
  isFlightFormSubmitted = false;

  flightFrm = this.fb.group({
    AirlineLogoAddress: [],
    AirlineName: ['', [Validators.required]],
    Stops: ['', [Validators.required]],
    TotalAmount: ['', [Validators.required, Validators.pattern('^$|^[0-9]+')]],
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

    this.flightSimulatorHttpService.createFlight(flightFormValue)
      .subscribe(
        (res: ServerResponse) => {
          console.log('asdf');
          this.toastr.success(res.message, 'Success');
          this.router.navigate(['../list'], { relativeTo: this.route });
        }
      );
  }

}
