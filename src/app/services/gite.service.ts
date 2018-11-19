import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../../environments/environment';

@Injectable()
export class GiteService {
  private client = createClient({
    space: environment.space,
    accessToken: environment.accessToken,
  });

  constructor() {}

  getGites(query?: object): Promise<Entry<any>[]> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: 'cottage',
          },
          query,
        ),
      )
      .then((res) => res.items);
  }

  getGite(id: string): Promise<Entry<any>> {
    return this.client
      .getEntries(
        Object.assign(
          {
            content_type: 'cottage',
          },
          { 'sys.id': id },
        ),
      )
      .then((res) => res.items[0]);
  }
}
