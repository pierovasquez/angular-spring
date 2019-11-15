import { Component, OnInit, ViewChild, ElementRef, Self } from '@angular/core';
import { ControlValueAccessor, Validator, AbstractControl, ValidationErrors, Validators, NgControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
  ]
})
export class CustomInputComponent implements OnInit, ControlValueAccessor, Validator {

  // Para que los ngModels y FormControl puedan acceder a este componente necesita el provider 'NG_VALUE_ACCESOR'
  // Ngmodel injectara el VALUE_ACCESOR_TOKEN para que sea vea si esta injectado en los providers

  @ViewChild('input', { static: false }) input: ElementRef;


  onChange: (value) => any;
  onTouched: () => any;
  disabled: boolean;

  writeValue(value: any): void {
    this.input.nativeElement.value = value;
  }
  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(control: AbstractControl): ValidationErrors {

    // Toma el control del componente que este utilizando este 'custom component'
    // Retorna un set de errores de validacion o null
    return Validators.required(control);
  }
  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error("Method not implemented.");
  // }


  constructor(@Self() public controlDir: NgControl) {
    // NgControl injecta VALUE_ACCESOR y VALIDATOR, por lo cual no es necesario injectarlos en los providers
    // Queremos que el ngControl asocie VALUE_ACCESOR y VALIDATOR con este componente.
    controlDir.valueAccessor = this;
  }

  ngOnInit() {
    const control = this.controlDir.control;
    const validators = control.validator
      ? [control.validator, Validators.required]
      : Validators.required;
    control.setValidators(validators);
    control.updateValueAndValidity();
  }

}
