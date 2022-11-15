import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserGuard } from './services/user.guard';


const routes: Routes = [
  {
    path : '',
    component : SignupComponent,
    pathMatch : "full"
  },
  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : "full"
  },
  {
    path : 'home',
    component : HomeComponent,
    pathMatch : "full",
    canActivate : [UserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
