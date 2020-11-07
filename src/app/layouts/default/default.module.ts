import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/module/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/module/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule} from '@angular/material/card';
import { HeadlinerComponent } from 'src/app/module/headliner/headliner.component';
import { AboutmeComponent } from 'src/app/module/aboutme/aboutme.component';
import { PortfolioComponent } from 'src/app/module/portfolio/portfolio.component';
import { StoryComponent } from 'src/app/module/story/story.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { DataComponent } from 'src/app/module/data/data.component';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { LoginPageComponent } from 'src/app/module/user/login-page/login-page.component';
import { EmailLoginComponent } from 'src/app/module/user/email-login/email-login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { CustomerDetailsComponent } from 'src/app/module/customers/customer-details/customer-details.component';
import { CustomersListComponent } from 'src/app/module/customers/customers-list/customers-list.component';
import { CreateCustomerComponent } from 'src/app/module/customers/create-customer/create-customer.component';







@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    HeadlinerComponent,
    LoginPageComponent,
    EmailLoginComponent,
    AboutmeComponent,
    PortfolioComponent,
    StoryComponent,
    DataComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    CreateCustomerComponent






  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,






  ]
})
export class DefaultModule { }
