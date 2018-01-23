import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component'
import { AppComponent } from './app.component';
import {
  FormsModule,
  ReactiveFormsModule
  } from '@angular/forms';

  import { DemoFormSkuWithBuilderComponent } from './demo-form-sku-with-builder/demo-form-sku-with-builder.component';
import { DemoFormWithValidationsExplicitComponent } from './demo-form-with-validations-explicit/demo-form-with-validations-explicit.component';
import { DemoFormWithCustomValidationComponent } from './demo-form-with-custom-validation/demo-form-with-custom-validation.component';
import { DemoFormWithEventsComponent } from './demo-form-with-events/demo-form-with-events.component';
import { DemoFormNgModelComponent } from './demo-form-ng-model/demo-form-ng-model.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent,
    DemoFormWithValidationsExplicitComponent,
    DemoFormWithCustomValidationComponent,
    DemoFormWithEventsComponent,
    DemoFormNgModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- add this
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
