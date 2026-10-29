import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { ProductsModule } from './products/products-module';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';
import { NotFound } from './components/not-found/not-found';
import { Footer } from './components/footer/footer';

@NgModule({
  declarations: [App, Home, Navbar, NotFound, Footer],
  imports: [BrowserModule, ProductsModule, AppRoutingModule],
  providers: [provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
