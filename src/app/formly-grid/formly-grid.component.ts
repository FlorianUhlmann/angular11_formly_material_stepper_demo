import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  selector: 'app-formly-grid',
  template: `<form style="width: 50%" [formGroup]="form" (ngSubmit)="submit()">
    <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form" ></formly-form>
    <button
      type="submit"
      class="btn btn-primary submit-button"
      [disabled]="!form.valid"
    >
      Submit
    </button>
  </form>`,
  styleUrls: ['./formly-grid.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormlyGridComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      template: '<div><strong>Person:</strong></div>',
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-2',
          type: 'input',
          key: 'firstName',
          templateOptions: {
            label: 'Vorname',
          },
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'lastName',
          templateOptions: {
            label: 'Nachname',
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.firstName',
          },
        },
      ],
    },

    {
      template: '<div><strong>Addresse:</strong></div>',
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-2',
          type: 'input',
          key: 'strasse',
          templateOptions: {
            label: 'Straße',
          },
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'hausNummer',
          templateOptions: {
            label: 'Hausnummer',
            pattern: '\\d',
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-2',
          type: 'input',
          key: 'ort',
          templateOptions: {
            label: 'Ort',
          },
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'postLeitZahl',
          templateOptions: {
            type: 'number',
            label: 'Postleitzahl',
            max: 99999,
            min: 0,
            pattern: '\\d{5}',
          },
        },
      ],
    },
    {
      template: '<div><strong>Kontakt:</strong></div>',
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-2',
          type: 'input',
          key: 'email',
          templateOptions: {
            label: 'E-Mail',
            required: true,
          },
        },
        {
          className: 'flex-2',
          type: 'input',
          key: 'emailBestaetigung',
          templateOptions: {
            label: 'E-Mail Bestätigung',
            required: true,
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-2',
          type: 'input',
          key: 'telefon',
          templateOptions: {
            label: 'Telefonnummer',
            required: false,
          },
        },
      ],
    },
    {
      template: '<hr>',
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }

  title = 'angular-css';
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
