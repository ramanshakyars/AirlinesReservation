import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './Contact_page/contact/contact.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search-flight',component:SearchFlightComponent},
  {path:'Registration',component:RegistrationComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'cutomer-login',component:CustomerLoginComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
