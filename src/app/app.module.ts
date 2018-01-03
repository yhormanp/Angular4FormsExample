import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component'
import { AppComponent } from './app.component';
import {
  FormsModule,
  ReactiveFormsModule
  } from '@angular/forms';

  import { DemoFormSkuWithBuilderComponent } from './demo-form-sku-with-builder/demo-form-sku-with-builder.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent
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
