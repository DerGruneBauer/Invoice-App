import { Component, OnInit } from '@angular/core';
import { InvoiceCardComponent } from '../invoice-card/invoice-card.component';
import { InvoiceService } from 'apps/invoice/src/app/invoice.service';
import {MatDrawer, matDrawerAnimations, MatSidenavModule} from '@angular/material/sidenav';


@Component({
  selector: 'der-grune-bauer-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  screenWidth: any = window.screen.width;
  showDrawer: boolean = false;
  invoiceNumber: number;
  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.getUserInvoiceCount();
  }

  closeDrawer(){
    this.showDrawer = false;
  }

  getUsers() {
    this.invoiceService.getUser(1).subscribe((data) => {
      console.log(data);
    })
  }

  getUserInvoiceCount(){
    this.invoiceService.getUserInvoices(1).subscribe((data: any) => {
      this.invoiceNumber = data.length;
    })
  }

}
