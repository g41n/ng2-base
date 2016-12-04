import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroComponent } from './hero.component';
import { RoutingTestComponent } from './routing-test.component';

const routes: Routes = [
  { path: '', redirectTo: '/hero-component', pathMatch: 'full' },
  { path: 'hero-component', component: HeroComponent },
  { path: 'routing-test', component: RoutingTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class CorsoRoutingModule { }
