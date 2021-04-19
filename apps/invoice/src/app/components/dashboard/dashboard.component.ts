import { Component, OnInit } from '@angular/core';
import { InvoiceCardComponent } from '../invoice-card/invoice-card.component';
import { InvoiceService } from 'apps/invoice/src/app/invoice.service';

@Component({
  selector: 'der-grune-bauer-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  screenWidth: any = window.screen.width;
  
  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
  }

  get invoiceNumber() {
    return this.invoiceService.getInvoiceNumber();
  }

}
