import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-multi-step-grid',
  template:  `
  <form [formGroup]="form" (ngSubmit)="submit()">
   <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>
 </form>


 `
})
export class MultiStepGridComponent  {

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [{
    type: 'stepper',
    fieldGroup: [
      {
        fieldGroupClassName: 'display-flex',
        templateOptions: { label: 'Einstieg' },
        fieldGroup: [
          {
            className: 'flex-item',
            type: 'input',
            key: 'Quadratmeter',
            templateOptions: {
              type: 'number',
              label: 'Quadratmeter'
            },
          },
        ]
      },
      {
        fieldGroupClassName: 'display-flex',
        templateOptions: { label: 'Absicherung' },
        fieldGroup: [


          {
            className: '',
            type: 'input',
            key: 'geburtsdatum',
            templateOptions: {
              type: 'date',
              label: 'Geburtsdatum'
            },
          },
        ],
      },
      {
        fieldGroupClassName: 'display-flex',
        templateOptions: { label: 'Persönliche Daten' },
        fieldGroup: [

          {
            className: 'flex-1',
            fieldGroup: [
              {
                type: 'input',
                key: 'firstName',
                templateOptions: {
                  label: 'First Name',
                },
              },

              {
                type: 'input',
                key: 'lastName',
                templateOptions: {
                  label: 'Last Name',
                },
              },
            ],
          },
          {
            className: 'flex-1',
            fieldGroup: [
              {

                type: 'input',
                key: 'street',
                templateOptions: {
                  label: 'Street',
                },
              },
              {
                type: 'input',
                key: 'cityName',
                templateOptions: {
                  label: 'City',
                },
              },
              {
                type: 'input',
                key: 'zip',
                templateOptions: {
                  type: 'number',
                  label: 'Zip',
                },
              },
            ],
          },
        ],
      },
      {
        templateOptions: { label: 'Zahlweise' },
        className: 'flex-1',
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
      {
        templateOptions: { label: 'Zusammenfassung' },
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

