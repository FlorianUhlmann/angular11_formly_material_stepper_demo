import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-stepper',
  template: `
  <mat-horizontal-stepper>
    <mat-step
      *ngFor="let step of field.fieldGroup; let index = index; let last = last;">
      <ng-template matStepLabel>{{ step.templateOptions?.label }}</ng-template>
      <formly-field [field]="step"></formly-field>

      <div>
        <button mat-raised-button matStepperPrevious *ngIf="index !== 0"
          class=" backButton"
          type="button">
          Back
        </button>

        <button mat-raised-button matStepperNext *ngIf="!last"
          class=" weiterButton" type="button"
          [disabled]="!isValid(step)">
          Next
        </button>

        <button  mat-raised-button matStepperNext *ngIf="last" class="submitButton"
          [disabled]="!form.valid"
          type="submit">
          Ja, Vertrag abschließen
        </button>
      </div>
    </mat-step>
  </mat-horizontal-stepper>
`,
})
export class FormlyFieldStepper extends FieldType {
  isValid(field: FormlyFieldConfig):any {
    if (field.key) {
      return field.formControl?.valid;
    }

    return field.fieldGroup?.every(f => this.isValid(f));
  }
}
