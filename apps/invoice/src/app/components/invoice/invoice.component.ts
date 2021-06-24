import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'apps/invoice/src/app/invoice.service';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'der-grune-bauer-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  screenWidth: any = window.screen.width;
  showDrawer: boolean = false;
  invoices = {};
  
  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.getUserInvoices();
  }

  get invoiceDetails() {
    return this.invoiceService.returnInvoiceDetails();
  }

  closeDrawer(){
    this.showDrawer = false;
  }

  getUserInvoices(){
    this.invoiceService.getUserInvoices(1).subscribe((data) => {
      this.invoices = data;
    })
  }

}
