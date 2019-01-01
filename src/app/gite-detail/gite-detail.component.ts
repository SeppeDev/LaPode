import { GiteService } from './../services/gite.service';
import { Gite } from './../models/gite';

import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Entry } from 'contentful';

@Component({
  selector: 'app-gite-detail',
  templateUrl: './gite-detail.component.html',
  styleUrls: ['./gite-detail.component.scss'],
})
export class GiteDetailComponent implements OnInit {
  id: string;
  gite: Entry<Gite>;

  constructor(private route: ActivatedRoute, private location: Location, private giteService: GiteService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.getGite();
  }

  getGite(): void {
    this.giteService.getGite(this.id).then((gite) => (this.gite = gite));
  }

  goBack(): void {
    this.location.back();
  }
}
