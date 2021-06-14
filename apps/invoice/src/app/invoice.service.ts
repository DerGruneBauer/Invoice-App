import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Time } from '@angular/common';
import { Timestamp } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  invoiceNumber = 8;
  invoiceDetails = [];

  constructor(private httpClient: HttpClient) { }

  apiUrl: string = 'http://localhost:3333/users';
  invoiceUrl: string = 'http://localhost:3333/invoices';

  getUser(id: number){
    return this.httpClient.get(`${this.apiUrl}/${id}`, {responseType: 'json'})
  }
  
  getUserInvoices(id: number){
    return this.httpClient.get(`${this.apiUrl}/${id}/invoices`, {responseType: 'json'})
  }

  postNewInvoice(items: [string, number, number], user_id: number, due_date: Date, amount_due: number, status: string, payment_date: Date, payment_terms: string, project_description: string, client_name: string, client_email: string, client_address: string, client_city: string, client_postcode: number, client_country: string){
    return this.httpClient.post(`${this.invoiceUrl}`, { items, user_id, due_date, amount_due, status, payment_date, payment_terms, project_description, client_name, client_email, client_address, client_city, client_postcode, client_country })
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
