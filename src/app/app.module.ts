import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CorsoRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';
import { RoutingTestComponent } from './routing-test.component';

import { BackendService } from './backend.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    RoutingTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CorsoRoutingModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
