import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MultiStepComponent } from './multi-step/multi-step.component';
import { FormlyFieldStepper } from './multi-step/stepper.type';
import { MatStepperModule } from '@angular/material/stepper';
import { MultiStepGridComponent } from './multi-step-grid/multi-step-grid.component';
import {MatDividerModule} from '@angular/material/divider';
import { FormlyGridComponent } from './formly-grid/formly-grid.component';
import { SharedMaterialModule } from './shared-material.module';
import { FormlyGridMaterialComponent } from './formly-grid-material/formly-grid-material.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiStepComponent,
    FormlyFieldStepper,
    MultiStepGridComponent,
    FormlyGridComponent,
    FormlyGridMaterialComponent
  ],
  imports: [
    SharedMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatStepperModule,
    MatDividerModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true },
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      types: [
        { name: 'stepper', component: FormlyFieldStepper, wrappers: [] },
      ]
     }),
    FormlyMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
