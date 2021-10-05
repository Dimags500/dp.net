import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { PageHeaderComponent } from './utils/page-header/page-header.component';
import { CustomersComponent } from './components/customers/customers.component';
import { NameFixPipe } from './pipes/name-fix.pipe';
import { NameSuffixPipe } from './pipes/name-suffix.pipe';
import { ContactsService } from './services/contacts.service';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { environment } from 'src/environments/environment';

import {AngularFireAuthModule  } from '@angular/fire/compat/auth';
import {AngularFireModule  } from '@angular/fire/compat';
import {AngularFireStorageModule  } from '@angular/fire/compat/storage';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SidenavComponent,
    ContactsComponent,
    PageNotFoundComponent,
    PageHeaderComponent,
    CustomersComponent,
    NameFixPipe,
    NameSuffixPipe,
    NewCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,

    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireStorageModule ,
    // AngularFireAuthModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
