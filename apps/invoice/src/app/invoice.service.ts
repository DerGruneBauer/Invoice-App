import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  invoiceNumber = 8;
  invoiceDetails = [];

  constructor(private httpClient: HttpClient) { }

  apiUrl: string = 'http://localhost:3333/users';

  getUser(id: number){
    return this.httpClient.get(`${this.apiUrl}/${id}`, {responseType: 'json'})
  }

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
