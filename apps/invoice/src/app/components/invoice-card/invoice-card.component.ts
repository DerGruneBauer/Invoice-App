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
//maybe could write a pipe that formats the invoice ids to be a code eg. #RT001 vs just 1
  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.getUserInvoices();
  }

  getUserInvoices(){
    this.invoiceService.getUserInvoices(1).subscribe((data: []) => {
      this.invoices = data;
      console.log(this.invoices);
    })
  }

  setInvoiceDetails(invoice: object) {
    this.invoiceService.getInvoiceDetails(invoice);
  }

}
