import { Gites } from './../data/gites';
import { Gite } from './../models/gite';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class GiteService {

  constructor() { }

    getGites(): Observable<Gite[]> {
      return of (Gites);
    }

    getGite(id: number): Observable<Gite> {
      return of(Gites.find(gite => gite.id == id));
    }

}
