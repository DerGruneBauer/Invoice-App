import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { InvoiceService } from 'apps/invoice/src/app/invoice.service';

@Component({
  selector: 'der-grune-bauer-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  items = this.invoiceDetails[0].items;
  userId = 1;
  userInfo = {};
  total = [];
  constructor(private invoiceService: InvoiceService) { }

  @Output() closeEvent = new EventEmitter<void>();

  ngOnInit(): void {
    this.getUserInfo();
    this.getOldTotals();
  }

  get invoiceDetails() {
    return this.invoiceService.returnInvoiceDetails();
  }

  modifyDueDateString(){
    let dueDate = this.invoiceDetails[0].due_date;
    let modDueDate = dueDate.substring(0,10);
    return modDueDate;
  }

  getUserInfo() {
    this.invoiceService.getUser(this.userId).subscribe((data) => {
      this.userInfo = data;
      
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
    
  }

  getTotal(id:number, quantity:number, price:number){
    this.total[id] = quantity*price;
  }
  getOldTotals(){
    for(let i = 0; i < this.invoiceDetails[0].items.length; i++) {
      this.total[i] = this.invoiceDetails[0].items[i][1]*this.invoiceDetails[0].items[i][2];
    }
  }

  removeNewItem(id: number) {
    this.items.splice(id, 1);
    this.total.splice(id, 1);
  }

  updateInvoice(userAddress, userCity, userPostcode, userCountry, clientName, clientEmail, clientAddress, clientCity, clientPostcode, clientCountry, dueDate, paymentTerms, projectDescription, invoiceId) {
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
    this.invoiceService.updateInvoice(itemArray, 1, dueDate, amountDue, "Pending", null, paymentTerms, projectDescription, clientName, clientEmail, clientAddress, clientCity, clientPostcode, clientCountry, userAddress, userCity, userPostcode, userCountry, invoiceId).subscribe((data) => {
      
    })

  }

  closeDrawer = () => {
    this.closeEvent.emit();
  };

  refresh(): void {
    window.location.reload();
}

}
