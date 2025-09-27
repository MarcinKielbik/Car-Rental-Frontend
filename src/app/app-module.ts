import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { DashboardAdmin } from './components/dashboard-admin/dashboard-admin';
import { DashboardUser } from './components/dashboard-user/dashboard-user';

@NgModule({
  declarations: [
    App,
    Navbar,
    Login,
    Signup,
    DashboardAdmin,
    DashboardUser
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
