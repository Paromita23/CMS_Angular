import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerOrderHistoryComponent } from './customer-order-history/customer-order-history.component';
import { CustomerPendingHistoryComponent } from './customer-pending-history/customer-pending-history.component';
import { VendorloginComponent } from './vendorlogin/vendorlogin.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendordashboardComponent } from './vendordashboard/vendordashboard.component';
import { VendorOrderHistoryComponent } from './vendor-order-history/vendor-order-history.component';
import { VendorPendingHistoryComponent } from './vendor-pending-history/vendor-pending-history.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { WalletComponent } from './wallet/wallet.component';

const appRoutes : Routes = [
   {path : 'dashBoard', component : DashboardComponent },
   {path : '', component : CustomerloginComponent },  
  {path : '', component : VendorloginComponent },
  {path : 'dashBoard', component : VendordashboardComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerloginComponent,
    DashboardComponent,
    CustomerOrderHistoryComponent,
    CustomerPendingHistoryComponent,
    VendorloginComponent,
    VendorComponent,
    VendordashboardComponent,
    VendorOrderHistoryComponent,
    VendorPendingHistoryComponent,
    PlaceorderComponent,
    WalletComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
