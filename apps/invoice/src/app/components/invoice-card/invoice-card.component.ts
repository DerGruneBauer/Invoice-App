import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'apps/invoice/src/app/invoice.service';

@Component({
  selector: 'der-grune-bauer-invoice-card',
  templateUrl: './invoice-card.component.html',
  styleUrls: ['./invoice-card.component.css']
})
export class InvoiceCardComponent implements OnInit {

  screenWidth: any = window.screen.width;
  invoices = [];

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.getUserInvoices();
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

  getUserInvoices(){
    this.invoiceService.getUserInvoices(1).subscribe((data: []) => {
      this.invoices = data;
      
    })
  }

  setInvoiceDetails(invoice: object) {
    this.invoiceService.getInvoiceDetails(invoice);
  }

}
