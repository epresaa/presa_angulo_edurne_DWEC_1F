import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [NavbarComponent],
})
export class AppServerModule {}
