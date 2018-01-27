import { inject } from 'aurelia-framework';
import { WebAPI } from './web-api';

@inject(WebAPI)
export class App {
  constructor(api) {
    this.api = api;
  }

  configureRouter(config, router) {
    config.title = 'Contacts';
    config.map([
      { route: '', moduleId: 'new-contact', title: 'Select' },
      { route: 'contacts/:id', moduleId: 'contact-detail', name: 'contacts' }
    ]);

    this.router = router;
  }
}
