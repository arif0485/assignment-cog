import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { ClientMaintenanceComponent } from './client-maintenance/client-maintenance.component';
import { ClientDetailsComponent } from './client-maintenance/client-details/client-details.component';
import { ClientTransactionSummaryComponent } from './client-maintenance/client-transaction-summary/client-transaction-summary.component';
import { PurgeInactiveClientsComponent } from './client-maintenance/purge-inactive-clients/purge-inactive-clients.component';
import { AppRoutingModule } from './app-routing.module';

import {MatTabsModule} from '@angular/material/tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    ClientMaintenanceComponent,
    ClientDetailsComponent,
    ClientTransactionSummaryComponent,
    PurgeInactiveClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
