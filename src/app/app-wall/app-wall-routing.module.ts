import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppWallComponent } from './app-wall.component';
import { DetailedSearchComponent } from './detailed-search/detailed-search.component';

import { SearchBoardComponent } from './search-board/search-board.component';
import { WildcardRouteComponent } from './wildcard-route/wildcard-route.component';

const routes: Routes = [
  { path: '', component: AppWallComponent, children:[
    {path:'', redirectTo:'search-board'},
    {path:'search-board', component:SearchBoardComponent},
    {path:'dt-search/:from/:to', component:DetailedSearchComponent},

  ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppWallRoutingModule { }
