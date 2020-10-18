import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { UserProfileComponent } from './module/user-profile/user-profile.component';
import { AuthGuard } from './module/user/auth.guard';





const routes: Routes = [
  {path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: '**', component: DefaultComponent,
  children: [{path: '', component: DashboardComponent},

  {path: 'home', component: DefaultComponent,
  children: [{path: '', component: DashboardComponent}]}
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
