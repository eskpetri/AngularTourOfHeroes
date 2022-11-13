import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  //Default path from root redictTo
  { path: 'detail/:id', component: HeroDetailComponent },
  {path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  //The method is called forRoot() because you configure the router at the application's root level.
  // The forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the 
  //current browser URL.
  exports: [RouterModule]   //AppRoutingModule exports RouterModule to be available throughout the application.
})
export class AppRoutingModule { }
