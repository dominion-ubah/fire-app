import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/switchMap';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/fromPromise';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
.then(() => {
  if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('/ngsw-worker.js');
  }
})
.catch(err => console.log(err));
