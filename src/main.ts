import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';

import AppComponent from './app/app';
import { mergeApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appConfig } from './app/app.config';

bootstrapApplication(
  AppComponent,
  mergeApplicationConfig(appConfig, {
    providers: [provideAnimations()],
  }),
).catch(console.error);
