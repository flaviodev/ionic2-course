import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Vibration } from '@ionic-native/vibration'; 
import { DatePicker } from '@ionic-native/date-picker'; 
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { SchedulingService } from './../domain/scheduling/scheduling-service';
import { HomePage } from '../pages/home/home';
import { ChoosePage } from '../pages/choose/choose';
import { RegistryPage } from '../pages/registry/registry';
import { SchedulingDao } from './../domain/scheduling/scheduling-dao';
import { SchedulingPage } from './../pages/scheduling/scheduling';
import { LoginPage } from './../pages/login/login';
import { Storage } from '@ionic/storage';
import { UserService } from './../domain/user/user-service';
import { ProfilePage } from '../pages/profile/profile';

function provideStorage() {
  return new Storage({
    name: 'aluracar',
    storeName: 'scheduling' 
  });
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChoosePage,
    RegistryPage,
    SchedulingPage,
    LoginPage, 
    ProfilePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChoosePage,
    RegistryPage,
    SchedulingPage,
    LoginPage,
    ProfilePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SchedulingService, 
    {provide: Storage, useFactory: provideStorage},
    SchedulingDao, 
    UserService,
    SplashScreen,
    StatusBar,
    Vibration,
    DatePicker,
    Camera    
  ]
})

export class AppModule {}
