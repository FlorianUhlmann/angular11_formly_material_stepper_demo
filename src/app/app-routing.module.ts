import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {GlasTaaComponent} from './glas-taa/glas-taa.component'
import { GxyzTaaComponent } from './gxyz-taa/gxyz-taa.component';
import { MultiStepGridComponent } from './multi-step-grid/multi-step-grid.component';

const routes: Routes = [
  {path: 'home',component: AppComponent },
  {path: 'glas-versicherung',component: GlasTaaComponent },
  {path: 'xyz-versicherung',component: GxyzTaaComponent },
  {path: 'glas-versicherung-formly',component: MultiStepGridComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
