import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: 'nauabpqci4i5',
  accessToken: '1a733ecefe2dc33eeee932d526ebff14bc7920fa083a741caf8fcd15fda6c058'
};

@Injectable()
export class GiteService {

  private client = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

    getGites(query?: object): Promise<Entry<any>[]> {
      return this.client.getEntries(Object.assign({
        content_type: 'cottage'
      }, query))
      .then(res => res.items);
    }

    getGite(id: string): Promise<Entry<any>> {
      return this.client.getEntries(Object.assign({
        content_type: "cottage"
      }, {"sys.id": id}))
        .then(res => res.items[0]);
    }
}
