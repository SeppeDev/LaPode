import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    GiteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
