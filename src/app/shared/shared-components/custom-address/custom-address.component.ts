import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-custom-address',
  templateUrl: './custom-address.component.html',
  styleUrls: ['./custom-address.component.scss'],
  viewProviders: [
    {provide: ControlContainer, useExisting: NgForm}
  ]
})
export class CustomAddressComponent implements OnInit, ControlValueAccessor {
  
  form = new FormGroup({});

  onTouched: () => void;
  disabled: boolean;

  writeValue(value: any): void {
    if (value) {
      // Con el emitEvent a false indicamos que emita solo cuando queramos nosotros.
      this.form.setValue(value, {emitEvent: false});
    }
  }
  registerOnChange(fn: (val: any) => void): void {
    this.form.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  constructor() { }

  ngOnInit() {
  }

}
