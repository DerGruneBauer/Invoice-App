import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../app/components/header/header.component';
import { InvoiceComponent } from '../app/components/invoice/invoice.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { InvoiceCardComponent } from './components/invoice-card/invoice-card.component';
import { AddInvoiceComponent } from './components/add-invoice/add-invoice.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvoiceComponent, DashboardComponent, InvoiceCardComponent, AddInvoiceComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
