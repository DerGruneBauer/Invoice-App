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
  
  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
  }

  get invoiceDetails() {
    return this.invoiceService.returnInvoiceDetails();
  }

  closeDrawer(){
    this.showDrawer = false;
  }

}
