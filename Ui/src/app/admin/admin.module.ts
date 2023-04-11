import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonorListComponent } from './donor-list/donor-list.component';
import { AcceptorListComponent } from './acceptor-list/acceptor-list.component';
import { MatTableModule} from '@angular/material/table';
import { VerifiedDataComponent } from './verified-data/verified-data.component';
import { RequestComponent } from './request/request.component';
import { BlooddataComponent } from './blooddata/blooddata.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DonorListComponent,
    AcceptorListComponent,
    VerifiedDataComponent,
    RequestComponent,
    BlooddataComponent,HistoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,MatTableModule,

  ]
})
export class AdminModule { }
