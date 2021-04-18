import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'der-grune-bauer-invoice-card',
  templateUrl: './invoice-card.component.html',
  styleUrls: ['./invoice-card.component.css']
})
export class InvoiceCardComponent implements OnInit {

  invoices: any[] = [
    {code: "RT3080", date: "August 19, 2020", amount: "$4,000.90", status: "Pending", client: "Boris Crowther"},
    {code: "RT3080", date: "August 19, 2020", amount: "$4,000.90", status: "Paid", client: "Boris Crowther"},
    {code: "RT3080", date: "August 19, 2020", amount: "$4,000.90", status: "Draft", client: "Boris Crowther"},
    {code: "RT3080", date: "August 19, 2020", amount: "$4,000.90", status: "Draft", client: "Boris Crowther"},
    {code: "RT3080", date: "August 19, 2020", amount: "$4,000.90", status: "Draft", client: "Boris Crowther"},
    {code: "RT3080", date: "August 19, 2020", amount: "$4,000.90", status: "Draft", client: "Boris Crowther"},
    {code: "RT3080", date: "August 19, 2020", amount: "$4,000.90", status: "Draft", client: "Boris Crowther"},
  ];

  constructor() { }
  

  ngOnInit(): void {
  }

}
