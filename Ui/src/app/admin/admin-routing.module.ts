import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceptorListComponent } from './acceptor-list/acceptor-list.component';
import { BlooddataComponent } from './blooddata/blooddata.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonorListComponent } from './donor-list/donor-list.component';
import { HistoryComponent } from './history/history.component';
import { RequestComponent } from './request/request.component';
import { VerifiedDataComponent } from './verified-data/verified-data.component';

const routes: Routes = [
  { path:'dashboard', component: DashboardComponent },
  { path :'acceptorlist',component:AcceptorListComponent},
  { path :'donerlist', component:DonorListComponent},
  { path : 'verifieddata',component:VerifiedDataComponent},
  { path:'history' ,component:HistoryComponent},
  { path:'request',component:RequestComponent},
  { path:'blooddata',component:BlooddataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
