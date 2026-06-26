// src/main.server.ts
import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser'; // ← ajoutez BootstrapContext
import AppComponent from './app/app';
import { config } from './app/app.config.server';

// La fonction prend un paramètre context et le passe à bootstrapApplication
const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(AppComponent, config, context);

export default bootstrap;
