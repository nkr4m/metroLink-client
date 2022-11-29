import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WildcardRouteComponent } from './app-wall/wildcard-route/wildcard-route.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./app-wall/app-wall.module').then(m => m.AppWallModule) },
  {path:'**', component:WildcardRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
