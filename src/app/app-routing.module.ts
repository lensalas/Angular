import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { CustomersListComponent } from './module/customers/customers-list/customers-list.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { AuthGuard } from './module/user/auth.guard';


const routes: Routes = [
  {
    path: 'profile', component: DefaultComponent,
    children: [
      {
        path: '**', component: CustomersListComponent,
      },
      {
        path: '**', component: DashboardComponent,
      },

    ],
  },
  {
    path: '**', component: DefaultComponent,
    children: [
      {
        path: '**', component: DashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
