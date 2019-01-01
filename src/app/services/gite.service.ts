import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../../environments/environment';

@Injectable()
export class GiteService {
  private locale = 'fr';
  private client = createClient({
    space: environment.space,
    accessToken: environment.accessToken,
  });

  constructor() {}

  getGites(): Promise<Entry<any>[]> {
    this.setlocale();

    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: 'cottage',
          },
          {
            locale: this.locale,
          },
        ),
      )
      .then((res) => res.items);
  }

  getGite(id: string): Promise<Entry<any>> {
    this.setlocale();

    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: 'cottage',
          },
          {
            'sys.id': id,
            locale: this.locale,
          },
        ),
      )
      .then((res) => res.items[0]);
  }

  private setlocale(): void {
    this.locale = 'en-US';
    if (localStorage.getItem('userLang') === 'fr') {
      this.locale = localStorage.getItem('userLang');
    }
  }
}
