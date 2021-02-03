import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-multi-step',
  template:  `
 <form [formGroup]="form" (ngSubmit)="submit()">
  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>
</form>

`
})
export class MultiStepComponent  {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [{
    type: 'stepper',
    fieldGroup: [
      {
        fieldGroupClassName: 'display-flex',
        templateOptions: { label: 'First' },
        fieldGroup: [
          {
            key: 'firstname',
            type: 'input',
            templateOptions: {
              label: 'First name',
              required: true,
            },
          },
          {
            key: 'age',
            type: 'input',
            templateOptions: {
              type: 'number',
              label: 'Age',
              required: true,
            },
          },
        ],
      },
      {
        templateOptions: { label: 'Personal data' },
        fieldGroup: [
          {
            key: 'firstname',
            type: 'input',
            templateOptions: {
              label: 'First name',
              required: true,
            },
          },
          {
            key: 'age',
            type: 'input',
            templateOptions: {
              type: 'number',
              label: 'Age',
              required: true,
            },
          },
        ],
      },
      {
        templateOptions: { label: 'Destination' },
        fieldGroup: [
          {
            key: 'country',
            type: 'input',
            templateOptions: {
              label: 'Country',
              required: true,
            },
          },
        ],
      },
      {
        templateOptions: { label: 'Day of the trip' },
        fieldGroup: [
          {
            key: 'day',
            type: 'input',
            templateOptions: {
              type: 'date',
              label: 'Day of the trip',
              required: true,
            },
          },
        ],
      },
    ],
  }];

  submit() {
    alert(JSON.stringify(this.model));
  }
}
