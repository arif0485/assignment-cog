import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { ClientMaintenanceComponent } from './client-maintenance/client-maintenance.component';
import { ClientDetailsComponent } from './client-maintenance/client-details/client-details.component';
import { ClientTransactionSummaryComponent } from './client-maintenance/client-transaction-summary/client-transaction-summary.component';
import { PurgeInactiveClientsComponent } from './client-maintenance/purge-inactive-clients/purge-inactive-clients.component';

const routes: Routes = [
    {
    path: 'app',
    component: BaseComponent,
        children: [{
            path: 'clientmaintenance',
            component: ClientMaintenanceComponent,
            children: [
                {
                    path: 'clientdetails',
                    component: ClientDetailsComponent
                },
                {
                    path: 'clienttransactionsummary',
                    component: ClientTransactionSummaryComponent
                },
                {
                    path: 'purgeinactiveclients',
                    component: PurgeInactiveClientsComponent
                }
            ]
        }]
    },
    {
        path:'**',redirectTo:'app/clientmaintenance/clientdetails',pathMatch:'full'
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
