import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { UsersComponent } from './components/users/users.component';
import {UserComponent} from './components/users/user/user.component';
import { NewComponent } from './components/users/new/new.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EditComponent } from './components/users/edit/edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterComponent } from './components/users/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    NewComponent,
    NavBarComponent,
    EditComponent,
    FilterPipe,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
