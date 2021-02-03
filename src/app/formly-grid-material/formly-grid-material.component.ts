import { Component,ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  selector: 'app-formly-grid-material',
  template: `<form style="width: 50%" [formGroup]="form" (ngSubmit)="submit()">
  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>
  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>
</form>
<br>
<mat-divider></mat-divider>
`,
  styleUrls: ['./formly-grid-material.component.css']
})
export class FormlyGridMaterialComponent  {

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[]=[
    {
      template: '<hr /><div><strong>Addresse:</strong></div>',
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
            pattern: '\\d'
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
  ];
}
