import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export const darkTheme = {
  'text': 'white',
  'invoiceCardBg': 'hsl(228, 28%, 20%)',
  'subText': 'hsl(228, 34%, 66%)',
  'pageBg': 'hsl(232, 19%, 15%)',
  'paidIcon' : 'rgba(101, 247, 138, 0.11)',
  'pendingIcon' : 'rgba(253, 137, 42, 0.15)',
  'draftIcon': 'rgba(134, 134, 134, 0.233)',
  'invoiceCarat': '#9b6dff',
  'statusDraftWord': 'rgb(216, 216, 216)',
  'invoiceBoxShadow': 'black',
  'invoiceTotalSheetBg': 'hsl(229, 30%, 26%)',
  'inputBorder': 'none',
  'buttonHover': 'hsl(229, 32%, 26%)',
  'editInvoiceButtonHover': 'hsl(228, 30%, 30%)',
};

export const lightTheme = {
  'text': 'black',
  'invoiceCardBg': 'white',
  'subText': 'gray',
  'pageBg' : '#fafafa',
  'paidIcon' : 'rgba(218, 254, 220, 0.5)',
  'pendingIcon' : 'rgba(254, 236, 218, 0.5)',
  'draftIcon': 'rgba(233, 232, 232, 0.5)',
  'invoiceCarat': 'black',
  'statusDraftWord': 'gray',
  'invoiceBoxShadow': 'rgba(48,47,48,0.1)',
  'invoiceTotalSheetBg': 'hsl(225, 100%, 98%)',
  'inputBorder': 'lightGray',
  'buttonHover': 'hsl(224, 65%, 96.75%)',
  'editInvoiceButtonHover': 'rgb(236, 238, 247)',
};
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

  postNewInvoice(items: any[], user_id: number, due_date: Date, amount_due: number, status: string, payment_date: Date, payment_terms: string, project_description: string, client_name: string, client_email: string, client_address: string, client_city: string, client_postcode: number, client_country: string, user_address:string, user_city: string, user_postcode: number, user_country:string){
    return this.httpClient.post(`${this.invoiceUrl}`, { items, user_id, due_date, amount_due, status, payment_date, payment_terms, project_description, client_name, client_email, client_address, client_city, client_postcode, client_country, user_address, user_city, user_postcode, user_country })
  }

  getInvoiceNumber() {
    return this.invoiceNumber; 
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

  updateInvoice(items: any[], user_id: number, due_date: Date, amount_due: number, status: string, payment_date: Date, payment_terms: string, project_description: string, client_name: string, client_email: string, client_address: string, client_city: string, client_postcode: number, client_country: string, user_address:string, user_city: string, user_postcode: number, user_country:string, invoiceId:number,){
    return this.httpClient.put(`${this.invoiceUrl}`, { items, user_id, due_date, amount_due, status, payment_date, payment_terms, project_description, client_name, client_email, client_address, client_city, client_postcode, client_country, user_address, user_city, user_postcode, user_country, invoiceId})
  }

  updateInvoicePaid(id: number){
    return this.httpClient.put(`${this.invoiceUrl}/${id}/paid`, {responseType: 'json'});
  }

  updateInvoicePending(id: number){
    return this.httpClient.put(`${this.invoiceUrl}/${id}/pending`, {responseType: 'json'});
  }

returnInvoiceDetails() {
  return this.invoiceDetails;
}

//Theme/Color Toggling
toggleDark() {
  this.setTheme(darkTheme);
}
toggleLight() {
  this.setTheme(lightTheme);
}

private setTheme(theme: {}) {
  Object.keys(theme).forEach(key =>
    document.documentElement.style.setProperty(`--${key}`, theme[key]))
}


}
