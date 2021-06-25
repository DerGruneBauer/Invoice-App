import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../app/components/header/header.component';
import { InvoiceComponent } from '../app/components/invoice/invoice.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { InvoiceCardComponent } from './components/invoice-card/invoice-card.component';
import { AddInvoiceComponent } from './components/add-invoice/add-invoice.component';
import { FormComponent } from './components/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { EditInvoiceComponent } from './components/edit-invoice/edit-invoice.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvoiceComponent, DashboardComponent, InvoiceCardComponent, AddInvoiceComponent, FormComponent, EditInvoiceComponent, EditFormComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule, FormsModule, BrowserAnimationsModule, MatSidenavModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
