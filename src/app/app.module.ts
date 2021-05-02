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

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AdminComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      UsersModule,
      FormsModule,
      BrowserAnimationsModule,
      MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
