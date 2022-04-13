import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurd } from './shared/auth-gaurd.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard',canActivate:[AuthGaurd], component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
