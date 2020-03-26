import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DemoserviceService } from './demoservice.service';
import { from } from 'rxjs';
import { SearchPipe } from './search.pipe';
import { DemodirectiveDirective } from './demodirective.directive';
import { RoutingcompComponent } from './routingcomp/routingcomp.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MatButtonModule, MatMenuModule, MatSidenavModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SearchPipe,
    DemodirectiveDirective,
    RoutingcompComponent,
    HomeComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
