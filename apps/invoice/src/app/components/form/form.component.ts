import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { InvoiceService } from 'apps/invoice/src/app/invoice.service';

@Component({
  selector: 'der-grune-bauer-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  items = ["one Item"];
  quantity: number[] = [];
  price: number[] = [];
  userId = 1;
  userInfo = {};

  constructor(private invoiceService: InvoiceService) { }

  @Output() closeEvent = new EventEmitter<void>();

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() {
    this.invoiceService.getUser(this.userId).subscribe((data) => {
      this.userInfo = data;
      console.log(data);
    })
  }
  addNewItem() {
    this.items.push("one Item");
    // this.quantity.push(0);
    // this.price.push(0);
  }

  removeNewItem(id: number) {
    console.log(id);
    this.items.splice(id, 1);
  }

  postInvoice(userAddress, userCity, userPostcode, userCountry, clientName, clientEmail, clientAddress, clientCity, clientPostcode, clientCountry, dueDate, paymentTerms, projectDescription) {
    let itemArray = [];
    let amountDue: number = 0;
    for (let i = 0; i < this.items.length; i++) {
      let itemPriceX = document.getElementsByName('price')[i] as HTMLInputElement;
      let price = itemPriceX.value;
      let itemNameX = document.getElementsByName('itemName')[i] as HTMLInputElement;
      let itemName = itemNameX.value;
      let itemQuantityX = document.getElementsByName('quantity')[i] as HTMLInputElement;
      let quantity = itemQuantityX.value;
      itemArray.push([itemName, parseFloat(quantity), parseFloat(price)]);
      amountDue += parseFloat(quantity)*parseFloat(price);
    }
    this.invoiceService.postNewInvoice(itemArray, 1, dueDate, amountDue, "Pending", null, paymentTerms, projectDescription, clientName, clientEmail, clientAddress, clientCity, clientPostcode, clientCountry, userAddress, userCity, userPostcode, userCountry).subscribe((data) => {
      console.log(data);
    })

  }

  closeDrawer = () => {
    this.closeEvent.emit();
  };

}
