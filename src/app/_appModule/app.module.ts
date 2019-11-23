import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreHttpService } from '../coreHttp.service';
import { HttpModule } from '@angular/http';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NotifierModule, NotifierOptions } from "angular-notifier";
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './guard/auth.guard';
import { RegisterService } from '../modules/register/service/register.service';
import { LoginService } from '../modules/login/service/login.service';
import { DailyService } from '../modules/daily/service/daily.service';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

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
        NotifierModule.withConfig(customNotifierOptions),
        // JwtModule.forRoot({
        //     config: {
        //         tokenGetter: tokenGetter,
        //         whitelistedDomains: ["localhost:1337"],
        //         blacklistedRoutes: ["localhost:1337/api/authenticateUser"]
        //     }
        // })
        // JwtModule.forRoot({
        //     config: {
        //         tokenGetter: tokenGetter,
        //         whitelistedDomains: [new RegExp('^(.+)$')],
        //         blacklistedRoutes: [new RegExp('^(.+\/api\/authenticateUser)$')]
        //     }
        // })
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                whitelistedDomains: [
                    "ajournal.azurewebsites.net",
                    "http://ajournal.azurewebsites.net",
                    "https://ajournal.azurewebsites.net",
                    "localhost:1337",
                    new RegExp('^(.+)$')
                ],
                blacklistedRoutes: [
                    "ajournal.azurewebsites.net/api/authenticateUser",
                    "http://ajournal.azurewebsites.net/api/authenticateUser",
                    "https://ajournal.azurewebsites.net/api/authenticateUser",
                    "localhost:1337/api/authenticateUser",
                    new RegExp('^(.+\/api\/authenticateUser)$')
                ]
            }
        })
    ],
    providers: [
      CoreHttpService,
      AuthGuard,
      RegisterService,
      LoginService,
      DailyService,
      {provide: LocationStrategy, useClass: HashLocationStrategy}
    ], 
    bootstrap: [AppComponent]
})
export class AppModule { }
