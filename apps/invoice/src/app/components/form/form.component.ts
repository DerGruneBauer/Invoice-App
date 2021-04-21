import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'der-grune-bauer-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  items = ["one Item"];
  quantity: number[] = [];
  price: number[] = [];

  constructor() { }

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

}
