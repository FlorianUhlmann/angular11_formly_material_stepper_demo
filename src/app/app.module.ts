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
import { PanelWrapperComponent } from './multi-step-grid/panel-wrapper.component';
import { GlasTaaComponent } from './glas-taa/glas-taa.component';
import { GxyzTaaComponent } from './gxyz-taa/gxyz-taa.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MultiStepComponent,
    FormlyFieldStepper,
    MultiStepGridComponent,
    FormlyGridComponent,
    FormlyGridMaterialComponent,
    GlasTaaComponent,
    GxyzTaaComponent
  ],
  imports: [
    FormsModule,
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
      ],
      wrappers: [
        { name: 'panel', component: PanelWrapperComponent },
      ],
     }),
    FormlyMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
