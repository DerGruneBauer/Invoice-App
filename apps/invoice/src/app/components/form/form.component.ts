import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { InvoiceService } from 'apps/invoice/src/app/invoice.service';

@Component({
  selector: 'der-grune-bauer-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  items:[[string, number, number]] = [["Item Name", 0, 0]];
  userId = 1;
  userInfo = {};
  total = [];
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
    if(this.items.length == 1){
        let itemPriceX = document.getElementsByName('price')[0] as HTMLInputElement;
        let price = itemPriceX.value;
        let itemNameX = document.getElementsByName('itemName')[0] as HTMLInputElement;
        let itemName = itemNameX.value;
        let itemQuantityX = document.getElementsByName('quantity')[0] as HTMLInputElement;
        let quantity = itemQuantityX.value;
        this.items[0] = [itemName, parseFloat(quantity), parseFloat(price)];
        this.items.push(["Item Name", 0, 0]);
        return;
    } else {
      for (let i = 0; i < this.items.length; i++) {
        let itemPriceX = document.getElementsByName('price')[i] as HTMLInputElement;
        let price = itemPriceX.value;
        let itemNameX = document.getElementsByName('itemName')[i] as HTMLInputElement;
        let itemName = itemNameX.value;
        let itemQuantityX = document.getElementsByName('quantity')[i] as HTMLInputElement;
        let quantity = itemQuantityX.value;
        this.items[i] = [itemName, parseFloat(quantity), parseFloat(price)];
      }
      this.items.push(["Item Name", 0, 0]);
    }
    console.log(this.items);
  }

  getTotal(id:number, quantity:number, price:number){
    this.total[id] = quantity*price;
  }

  removeNewItem(id: number) {
    this.items.splice(id, 1);
    this.total.splice(id, 1);
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
