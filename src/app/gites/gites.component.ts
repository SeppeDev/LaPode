import { GiteService } from './../services/gite.service';
import { Gite } from './../models/gite';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gites',
  templateUrl: './gites.component.html',
  styleUrls: ['./gites.component.scss']
})
export class GitesComponent implements OnInit {

  gites: Gite[];

  constructor(private giteService: GiteService) { }

  ngOnInit() {
    this.getGites();
  }

  getGites(): void {
    this.giteService.getGites()
    .subscribe(gites => this.gites = gites);
  }

}
