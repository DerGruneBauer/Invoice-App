import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InvoiceService } from './invoice.service';

@Component({
  selector: 'der-grune-bauer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 
  constructor(private invoiceService: InvoiceService) {}


}
