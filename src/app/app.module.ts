import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
  

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // PagesModule,
    // ComponentsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
