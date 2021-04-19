import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { InvoiceCardComponent } from '../components/invoice-card/invoice-card.component';
import { InvoiceComponent } from '../components/invoice/invoice.component';
import { AddInvoiceComponent } from '../components/add-invoice/add-invoice.component'; 

const appRoutes: Routes = [
    { path: '', component: DashboardComponent  },
    { path: 'Dashboard', component: DashboardComponent  },
    { path: 'individualInvoice', component: InvoiceComponent },
    { path: 'newInvoice', component: AddInvoiceComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        CommonModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
