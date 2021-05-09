import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'der-grune-bauer-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  closeDrawer = () => {
    this.closeEvent.emit();
  };

}
