import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'apps/invoice/src/app/invoice.service';

@Component({
  selector: 'der-grune-bauer-invoice-card',
  templateUrl: './invoice-card.component.html',
  styleUrls: ['./invoice-card.component.css']
})
export class InvoiceCardComponent implements OnInit {

  screenWidth: any = window.screen.width;

  // invoices: any[] = [
  //   {code: "RT3080", date: "19 Sep 2022", amount: "$4,000.90", status: "Pending", client: "Boris Crowther", stAddress: '19 Union Terrace', city: 'London', postCode: '48221', country: 'United Kingdom', clientEmail: 'BCrowther@mail.com', clientStAddress: '84 Church Way', clientCity: 'Bradford', clientPostCode: '48992', clientCountry: 'United Kingdom', paymentTerms: "Net 30 days", projectDescription: 'Graphic Design', itemList: [{itemName: 'Logo', quantity: 3, price: 90.00}, {itemName: 'Branding', quantity: 2, price: 125.45}], paymentDate: '21 Aug 2021'},
  //   {code: "RT3080", date: "19 Sep 2022", amount: "$4,000.90", status: "Paid", client: "Boris Crowther", stAddress: '19 Union Terrace', city: 'London', postCode: '48221', country: 'United Kingdom', clientEmail: 'BCrowther@mail.com', clientStAddress: '84 Church Way', clientCity: 'Bradford', clientPostCode: '48992', clientCountry: 'United Kingdom', paymentTerms: "Net 30 days", projectDescription: 'Graphic Design', itemList: [{itemName: 'Logo', quantity: 3, price: 90.00}, {itemName: 'Branding', quantity: 2, price: 125.45}], paymentDate: '21 Aug 2021'},
  //   {code: "RT3080", date: "August 19, 2020", amount: "$4,000.90", status: "Draft", client: "Boris Crowther", stAddress: '19 Union Terrace', city: 'London', postCode: '48221', country: 'United Kingdom', clientEmail: 'BCrowther@mail.com', clientStAddress: '84 Church Way', clientCity: 'Bradford', clientPostCode: '48992', clientCountry: 'United Kingdom', paymentTerms: "Net 30 days", projectDescription: 'Graphic Design', itemList: [{itemName: 'Logo', quantity: 3, price: 90.00}, {itemName: 'Branding', quantity: 2, price: 125.45}], paymentDate: '21 Aug 2021'},
  //   {code: "RT3080", date: "August 19, 2020", amount: "$4,000.90", status: "Pending", client: "Boris Crowther", stAddress: '19 Union Terrace', city: 'London', postCode: '48221', country: 'United Kingdom', clientEmail: 'BCrowther@mail.com', clientStAddress: '84 Church Way', clientCity: 'Bradford', clientPostCode: '48992', clientCountry: 'United Kingdom', paymentTerms: "Net 30 days", projectDescription: 'Graphic Design', itemList: [{itemName: 'Logo', quantity: 3, price: 90.00}, {itemName: 'Branding', quantity: 2, price: 125.45}], paymentDate: '21 Aug 2021'},
  //   {code: "RT3080", date: "August 19, 2020", amount: "$4,000.90", status: "Draft", client: "Boris Crowther", stAddress: '19 Union Terrace', city: 'London', postCode: '48221', country: 'United Kingdom', clientEmail: 'BCrowther@mail.com', clientStAddress: '84 Church Way', clientCity: 'Bradford', clientPostCode: '48992', clientCountry: 'United Kingdom', paymentTerms: "Net 30 days", projectDescription: 'Graphic Design', itemList: [{itemName: 'Logo', quantity: 3, price: 90.00}, {itemName: 'Branding', quantity: 2, price: 125.45}], paymentDate: '21 Aug 2021'},
  //   {code: "RT3080", date: "August 19, 2020", amount: "$4,000.90", status: "Draft", client: "Boris Crowther", stAddress: '19 Union Terrace', city: 'London', postCode: '48221', country: 'United Kingdom', clientEmail: 'BCrowther@mail.com', clientStAddress: '84 Church Way', clientCity: 'Bradford', clientPostCode: '48992', clientCountry: 'United Kingdom', paymentTerms: "Net 30 days", projectDescription: 'Graphic Design', itemList: [{itemName: 'Logo', quantity: 3, price: 90.00}, {itemName: 'Branding', quantity: 2, price: 125.45}], paymentDate: 'September 9, 2021'},
  //   {code: "RT3080", date: "August 19, 2020", amount: "$4,000.90", status: "Draft", client: "Boris Crowther", stAddress: '19 Union Terrace', city: 'London', postCode: '48221', country: 'United Kingdom', clientEmail: 'BCrowther@mail.com', clientStAddress: '84 Church Way', clientCity: 'Bradford', clientPostCode: '48992', clientCountry: 'United Kingdom', paymentTerms: "Net 30 days", projectDescription: 'Graphic Design', itemList: [{itemName: 'Logo', quantity: 3, price: 90.00}, {itemName: 'Branding', quantity: 2, price: 125.45}], paymentDate: 'September 9, 2021'},
  // ];

  invoices = [];

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
