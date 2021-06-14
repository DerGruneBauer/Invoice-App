import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { InvoiceService } from 'apps/invoice/src/app/invoice.service';

@Component({
  selector: 'der-grune-bauer-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<void>();

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
  }

  closeDrawer = () => {
    this.closeEvent.emit();
  };

  postNewInvoice() {

  }

}
