import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { GitesComponent } from './gites/gites.component';
import { GiteDetailComponent } from './gite-detail/gite-detail.component';
import { GiteService } from './services/gite.service';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { ContactComponent } from './contact/contact/contact.component';
import { GroundsComponent } from './grounds/grounds/grounds.component';
import { AboutComponent } from './about/about.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GitesComponent,
    GiteDetailComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    ContactComponent,
    GroundsComponent,
    AboutComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgbModule,
    FlatpickrModule.forRoot()
  ],
  providers: [
    GiteService
  ],
  bootstrap: [AppComponent],
  exports: [
    CalendarComponent
  ]
})
export class AppModule { }
