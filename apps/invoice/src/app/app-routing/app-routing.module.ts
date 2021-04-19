import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { InvoiceCardComponent } from '../components/invoice-card/invoice-card.component';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent  }
    // { path: '', component: InvoiceCardComponent  }
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
