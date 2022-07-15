import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js/dist/zone';

import { ModuleAng } from './app.module';
if (process.env['NODE_ENV']==='production') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(ModuleAng)
  .catch(err => console.error(err));
