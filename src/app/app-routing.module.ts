import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GitesComponent } from './gites/gites.component';
import { GiteDetailComponent } from './gite-detail/gite-detail.component';
import { ContactComponent } from './contact/contact/contact.component';
import { GroundsComponent } from './grounds/grounds/grounds.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'gites', component: GitesComponent },
  { path: 'gite/:id', component: GiteDetailComponent },
  { path: 'grounds', component: GroundsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
