import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InvoiceService } from '../../invoice.service';

@Component({
  selector: 'der-grune-bauer-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  darkTheme = new FormControl(false);

  constructor(private invoiceService: InvoiceService) {

    this.darkTheme.valueChanges.subscribe(value => {
      if (value) {
        this.invoiceService.toggleDark();
      } else {
        this.invoiceService.toggleLight();
      }
    })
  }

  ngOnInit(): void {
  }
  
}
