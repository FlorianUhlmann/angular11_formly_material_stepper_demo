import { Component, OnInit } from '@angular/core';
import { FormGroup, NgModel } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FieldType } from '@ngx-formly/core';
import { type } from 'os';
import { Key } from 'protractor';

@Component({
  selector: 'app-multi-step-grid',
  template: `
    <button mat-raised-button></button>
    <h1 class="betrag">Ihre Glasversicherung beträgt {{ model.qMeter | number: '1.2-2' }} €</h1>
    {{model|json}}
    <form [formGroup]="form" (ngSubmit)="submit()">
      <formly-form
        [model]="model"
        [fields]="fields"
        [options]="options"
        [form]="form"
      ></formly-form>
    </form>
  `,
})
export class MultiStepGridComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      type: 'stepper',
      fieldGroup: [
        {
          fieldGroupClassName: 'display-flex',
          templateOptions: { label: 'Einstieg' },
          fieldGroup: [
            {
              className: 'inhaltMitte',
              type: 'input',
              key: 'qMeter',
              defaultValue:'100',
              templateOptions: {
                type: 'number',
                label: 'Quadratmeter',
                placeholder: '100',
              },
              modelOptions:{
                updateOn:'blur'
              }
            },
          ],
        },
        {
          fieldGroupClassName: 'display-flex',
          templateOptions: { label: 'Absicherung' },
          fieldGroup: [
            {
              className: '',
              type: 'select',
              key: 'selbstbeteiligung',
              templateOptions: {
                label: 'Selbstbeteiligung',
                options: [
                  { label: 'keine Selbstbeteiligung', value: 'noEuros' },
                  { label: '150 €', value: '150Euros' },
                  { label: '250 €', value: '250Euros' },
                  { label: '500 €', value: '500Euros' },
                ],
                required: true,
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
                  key: 'name',
                  templateOptions: {
                    label: 'Name',
                  },
                },

                {
                  type: 'input',
                  key: 'nachName',
                  templateOptions: {
                    label: 'Nachname',
                  },
                },
              ],
            },
            {
              className: 'flex-1',
              fieldGroup: [
                {
                  type: 'input',
                  key: 'strasze',
                  templateOptions: {
                    label: 'Straße und Hausnummer',
                  },
                },
                {
                  type: 'input',
                  key: 'wohnOrt',
                  templateOptions: {
                    label: 'Wohnort',
                  },
                },
                {
                  type: 'input',
                  key: 'postLeitZahl',
                  templateOptions: {
                    type: 'number',
                    label: 'Postleitzahl',
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
              key: 'bezahlweise',
              type: 'radio',
              templateOptions: {
                label: 'Wie möchten Sie bezahlen?',
                placeholder: 'Placeholder',
                description: 'Description',
                required: true,
                options: [
                  { value: 'jarhrlich', label: 'jährlich' },
                  { value: 'monatlich', label: 'monatlich' },
                ],
              },
            },
              {
                key: 'zahlungsMethode',
                type: 'radio',
                templateOptions: {
                  label: 'Zahlungsmethode',
                  placeholder: 'Placeholder',
                  description: 'Description',
                  required: true,
                  options: [
                    { value: 'sepa', label: 'SEPA lastschrift' },
                    { value: 'rechnung', label: 'Rechnung ( Überweisung )' },
                  ],
                },
            },
            {
              key: 'iban',
              type: 'input',
              templateOptions: {
                type: 'daten',
                label: 'IBAN',
                required: true,
              },
            },
          ],
        },
        {
          templateOptions: { label: 'Zusammenfassung' },
          fieldGroup: [
            {
              wrappers: ['panel'],
              templateOptions: { label: 'Perönliche daten' },
            },
            {
              className: 'display-flex',
              fieldGroup: [
                {
                  className: 'flex-1',
                  fieldGroup: [
                    {
                      type: 'input',
                      key: 'firstName',
                      templateOptions: {
                        label: 'First Name',
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'lastName',
                      templateOptions: {
                        label: 'Last Name',
                        readonly: true,
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
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'cityName',
                      templateOptions: {
                        label: 'Stadt',
                        readonly: true,
                      },
                    },
                    {
                      type: 'input',
                      key: 'zip',
                      templateOptions: {
                        type: 'number',
                        label: 'Postleitzahl',
                        readonly: true,
                      },
                    },
                  ],
                },
              ],
            },

            {
              wrappers: ['panel'],
              templateOptions: { label: 'Glas-Versicherung' },
              className: 'displayFlex',
              fieldGroup: [
                {
                  key: 'day',
                  type: 'input',
                  templateOptions: {
                    type: 'daten',
                    label: 'Punkt 1',
                    readonly: true,
                  },
                },
                {
                  key: 'day',
                  type: 'input',
                  templateOptions: {
                    type: 'daten',
                    label: 'Prämie',
                    readonly: true,
                  },
                },
                {
                  key: 'day',
                  type: 'input',
                  templateOptions: {
                    type: 'daten',
                    label: 'Deckungssumme',
                    readonly: true,
                  },
                },
                {
                  key: 'day',
                  type: 'input',
                  templateOptions: {
                    type: 'daten',
                    label: 'Selbstbeteiligung',
                    readonly: true,
                  },
                },
              ],
            },
            {
              wrappers: ['panel'],
              templateOptions: { label: 'Vertrag' },
              className: 'displayFlex',
              fieldGroup: [
                {
                  type: 'input',
                  defaultValue: this.model?.lastname,
                  templateOptions: {
                    type: 'daten',
                    readonly: true,
                    label: 'Vertragsbegin',
                  },
                },
                {
                  type: 'input',
                  templateOptions: {
                    type: 'daten',
                    readonly: true,
                    label: 'Vertragslaufzeit',
                  },
                },
                {
                  type: 'input',
                  templateOptions: {
                    type: 'daten',
                    readonly: true,
                    label: 'Hauptfälligkeit',
                  },
                },
                {
                  type: 'input',
                  templateOptions: {
                    type: 'daten',
                    readonly: false,
                    label: 'Zahlweise',
                  },
                },
                {
                  type: 'input',
                  templateOptions: {
                    type: 'daten',
                    readonly: true,
                    label: 'Zahlungsmethode',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  betrag: number = this.model.qMeter;

  submit() {
    alert(JSON.stringify(this.model));
  }
}
