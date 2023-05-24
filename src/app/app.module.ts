import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RootComponent } from './root/root.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule],
  declarations: [RootComponent, LoginComponent],

  providers: [],
  bootstrap: [RootComponent],
})
export class AppModule {}
