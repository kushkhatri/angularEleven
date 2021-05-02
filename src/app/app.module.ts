import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {UsersModule} from './users/users.module';
import {FormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider'
import {MatIconModule} from '@angular/material/Icon';
import {MatSidenavModule} from "@angular/material/sidenav";


import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AdminComponent,
    TableComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      UsersModule,
      FormsModule,
      BrowserAnimationsModule,
      MatTableModule,
      MatButtonModule,
      MatDividerModule,
      MatIconModule,
      MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
