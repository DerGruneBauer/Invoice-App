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
  statusButtonText = "";
  
  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.getUserInvoices();
    this.alterStatusButtonText();
  }

  formatCode(id: number){
    let codeFormat = "";
    if(id > 9) {
      codeFormat = "RT0";
    } else if (id < 10){
      codeFormat = "RT00";
    } else {
      codeFormat = "RT";
    }
    return codeFormat;
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

  updateInvoiceStatus(id: number){
    if(this.invoiceDetails[0].status == "Pending") {
      this.invoiceService.updateInvoicePaid(id).subscribe((data) => {
        console.log(data);
      })
    } else if (this.invoiceDetails[0].status == "Paid") {
      this.invoiceService.updateInvoicePending(id).subscribe((data) => {
        console.log(data);
      })
    }
    else {
      console.log("Did not hit paid or pending");
    }
  }

  alterStatusButtonText(){
    if(this.invoiceDetails[0].status == "Pending") {
      this.statusButtonText = "Mark As Paid";
    } else if (this.invoiceDetails[0].status == "Paid") {
      this.statusButtonText = "Mark As Pending";
    }
  }
}
