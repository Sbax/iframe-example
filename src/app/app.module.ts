import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SafePipe } from './pipes/safe-url.pipe';
import { AnotherViewComponent } from './components/another-view/another-view.component';
import { IFrameComponent } from './components/iframe/iframe.component';
import { ViewComponent } from './components/view/view.component';

@NgModule({
  declarations: [AppComponent, SafePipe, AnotherViewComponent, IFrameComponent, ViewComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
