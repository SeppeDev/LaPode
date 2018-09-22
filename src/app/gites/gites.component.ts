import { GiteService } from './../services/gite.service';
import { Gite } from './../models/gite';
import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'contentful';

@Component({
  selector: 'app-gites',
  templateUrl: './gites.component.html',
  styleUrls: ['./gites.component.scss']
})
export class GitesComponent implements OnInit {

  private gites: Entry<any>[] = [];
  

  constructor(private giteService: GiteService) { }

  ngOnInit() {
    this.getGites();
  }

  getGites(): void {
    this.giteService.getGites()
      .then(gites => this.gites = gites);
  }

}
