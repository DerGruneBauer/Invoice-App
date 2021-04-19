import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  invoiceNumber = 8;
  invoiceDetails = [];

  constructor() { }

  getInvoiceNumber() {
    return this.invoiceNumber; //need to update once I have api working.
  }

  getInvoiceDetails(invoice: object) {
    this.invoiceDetails.push(invoice);
    if (this.invoiceDetails.length > 1) {
      this.invoiceDetails.splice(0,1);
          return this;
        }else{
          return this;
        }
  }

returnInvoiceDetails() {
  return this.invoiceDetails;
}

}
