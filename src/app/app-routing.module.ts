import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GodsComponent } from './gods/gods.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GodDetailComponent } from './god-detail/god-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: GodDetailComponent },
  { path: 'gods', component: GodsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
