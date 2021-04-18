import { Component, OnInit } from '@angular/core';
import { InvoiceCardComponent } from '../invoice-card/invoice-card.component';

@Component({
  selector: 'der-grune-bauer-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  invoices: any[] = [
    {code: "#RT3080", date: "August 19, 2020", amount: "$4,000.90", status: "pending", client: "Boris Crowther"},
    {code: "#RT3080", date: "August 19, 2020", amount: "$4,000.90", status: "draft", client: "Boris Crowther"},
    {code: "#RT3080", date: "August 19, 2020", amount: "$4,000.90", status: "paid", client: "Boris Crowther"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
