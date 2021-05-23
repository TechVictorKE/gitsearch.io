import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganisationComponent } from './organisation/organisation.component';


const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/' },
  { path: '', component: DashboardComponent    },
  { path: 'user', component: UserComponent },
  { path: 'organization',  component: OrganisationComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
