import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'der-grune-bauer-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})
export class EditInvoiceComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  closeDrawer = () => {
    this.closeEvent.emit();
  };

}
