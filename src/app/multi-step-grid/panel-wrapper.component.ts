import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-panel',
  template: `
    <div class="mat-card" style="margin:2em;padding-top:0;padding-left:0;padding-right:0">
      <div class="mat-card-header">
        <h3 class="mat-card-title" style="background:rgba(0,0,0,.06); padding:20px 20px;">{{ to.label }}</h3>
      </div>
      <div class="mat-card-content" style="padding:1em;">
        <ng-container #fieldComponent></ng-container>
      </div>
    </div>
  `,
})
export class PanelWrapperComponent extends FieldWrapper {}
