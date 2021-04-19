import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  invoiceNumber = 8;
  constructor() { }

  getInvoiceNumber() {
    return this.invoiceNumber; //need to update once I have api working.
  }
}
