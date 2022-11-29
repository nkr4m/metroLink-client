import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppWallRoutingModule } from './app-wall-routing.module';
import { AppWallComponent } from './app-wall.component';
import { SearchBoardComponent } from './search-board/search-board.component';
import { HttpClientModule } from '@angular/common/http';


import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';


import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DetailedSearchComponent } from './detailed-search/detailed-search.component';
import { WildcardRouteComponent } from './wildcard-route/wildcard-route.component';


@NgModule({
  declarations: [
    AppWallComponent,
    SearchBoardComponent,
    DetailedSearchComponent,
    WildcardRouteComponent,

  ],
  imports: [
    CommonModule,
    AppWallRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule
    
  ]
})
export class AppWallModule { }
