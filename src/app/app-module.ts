import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HttpClientModule } from '@angular/common/http';
import { ShellComponent } from './layout/shell/shell';
import { Sidebar } from './layout/sidebar/sidebar';
import { HomeComponent } from './pages/home/home';
import { CardComponent } from './shared/card/card';
import { UsersListComponent } from './pages/home/sections/users/users';
import { UserDetailComponent } from './pages/user-detail/user-detail';
import {  SidebarInfoComponent } from './layout/sidebar/sidebar-info/sidebar-info';
import { SidebarNavComponent } from './layout/sidebar/sidebar-nav/sidebar-nav';


@NgModule({
  declarations: [
    App,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    HomeComponent,
    ShellComponent,
    Sidebar,
    UsersListComponent,
    CardComponent,
    UserDetailComponent,
    SidebarInfoComponent,
    SidebarNavComponent
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
