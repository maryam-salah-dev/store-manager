import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { ProductsModule } from './products/products-module';
import { App } from './app';
import { Home } from './components/home/home';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { NotFound } from './components/not-found/not-found';


@NgModule({
  declarations: [App, Home, Navbar, Footer, NotFound],
  imports: [BrowserModule, FormsModule, ProductsModule, AppRoutingModule],
  providers: [provideHttpClient()],
  bootstrap: [App]
})
export class AppModule {}



