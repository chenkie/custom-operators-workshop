import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  AsyncValidatorFn
} from '@angular/forms';
import { combineLatest, debounceTime, filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  public flightsForm: FormGroup;
  public isFetching = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();

    const fromAirport$ = this.flightsForm.controls.fromAirport.valueChanges;
    // TODO: setup references to value changes for all form fields

    fromAirport$
      .pipe
      // TODO: combine the latest values from all form fields
      // to trigger the async validator
      ()
      .subscribe(([fromAirport, toAirport, departureDate, returnDate]) => {
        const validator = this.validateAiport({
          fromAirport,
          toAirport,
          departureDate,
          returnDate
        });
        this.flightsForm.controls.fromAirport.setAsyncValidators(validator);
        this.flightsForm.controls.fromAirport.updateValueAndValidity();
      });
  }

  private createForm(): void {
    this.flightsForm = this.fb.group({
      fromAirport: '',
      toAirport: '',
      departureDate: '',
      returnDate: ''
    });
  }

  private validateAiport(data: any): AsyncValidatorFn {
    this.isFetching = true;
    return (control: AbstractControl) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.isFetching = false;
          resolve(this.fakeValidateFlight(data));
        }, 700);
      });
    };
  }

  private fakeValidateFlight(data: any): any {
    const flightRoutes = [
      { from: 'SFO', to: 'SLC' },
      { from: 'LGA', to: 'LAX' },
      { from: 'ORD', to: 'SEA' },
      { from: 'SEA', to: 'ORD' },
      { from: 'SLC', to: 'LGA' },
      { from: 'SFO', to: 'LGA' },
      { from: 'DEN', to: 'LGA' }
    ];
    return flightRoutes.find(
      f => f.from === data.fromAirport && f.to === data.toAirport
    )
      ? null
      : { invalidFlightMessage: 'Sorry, no flights between these airports!' };
  }

  public onSubmit(): void {
    console.log(this.flightsForm.value);
  }
}
