import { Component, OnInit } from '@angular/core';
import { Gite } from '../../models/gite';
import { GiteService } from '../../services/gite.service';
import { Input } from '@angular/core';
import { Entry } from 'contentful';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() carousel: boolean;

  private gites: Entry<any>[] = [];

  constructor(private giteService: GiteService) {}

  ngOnInit() {
    this.getGites();
  }

  getGites(): void {
    this.giteService.getGites().then((gites) => (this.gites = gites));
  }
}
