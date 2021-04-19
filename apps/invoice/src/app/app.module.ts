import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../app/components/header/header.component';
import { InvoiceComponent } from '../app/components/invoice/invoice.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { InvoiceCardComponent } from './components/invoice-card/invoice-card.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvoiceComponent, DashboardComponent, InvoiceCardComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
