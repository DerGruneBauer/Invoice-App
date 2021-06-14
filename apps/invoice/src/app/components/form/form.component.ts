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

  constructor(private invoiceService: InvoiceService) { }

  @Output() closeEvent = new EventEmitter<void>();

  ngOnInit(): void {
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

  collectFormInfo(clientName, clientEmail){
    // let clientNamex = document.getElementsByName('clientName')[0] as HTMLInputElement;
    // let clientName = clientNamex.value;
    // let clientEmailx = document.getElementsByName('clientEmail')[0] as HTMLInputElement;
    // let clientEmail = clientEmailx.value;
    // let clientAddressx = document.getElementsByName('clientStAddress')[0] as HTMLInputElement;
    // let clientAddress = clientAddressx.value;
    
    console.log(clientName, clientEmail);


  }

  closeDrawer = () => {
    this.closeEvent.emit();
  };

}
