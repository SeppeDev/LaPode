import { GiteService } from './../services/gite.service';
import { Gite } from './../models/gite';

import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-gite-detail',
  templateUrl: './gite-detail.component.html',
  styleUrls: ['./gite-detail.component.scss']
})
export class GiteDetailComponent implements OnInit {
  id: number;
  @Input() gite: Gite;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private giteService: GiteService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {this.id = params['id']; });
    this.getGite();
    console.log(this.gite);
  }

  getGite(): void {
    this.giteService.getGite(this.id)
      .subscribe(gite => this.gite = gite);
  }

  goBack(): void {
    this.location.back();
  }

}
