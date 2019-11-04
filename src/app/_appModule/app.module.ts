import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreHttpService } from '../coreHttp.service';
import { HttpModule } from '@angular/http';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NotifierModule, NotifierOptions } from "angular-notifier";

const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LateralMenuComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  providers: [
    CoreHttpService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
