import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RandomService } from './random.service';
import { UsersService } from './users.service';

import { AppComponent } from './app.component';
import { SubComponent } from './sub/sub.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    SubComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    RandomService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
