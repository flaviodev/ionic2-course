import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SchedulingService } from './../domain/scheduling/scheduling-service';
import { HomePage } from '../pages/home/home';
import { ChoosePage } from '../pages/choose/choose';
import { RegistryPage } from '../pages/registry/registry';
import { SchedulingDao } from './../domain/scheduling/scheduling-dao';
import { SchedulingPage } from './../pages/scheduling/scheduling';
import { LoginPage } from './../pages/login/login';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';

function provideStorage() {
  return new Storage(['indexeddb'],{
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
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChoosePage,
    RegistryPage,
    SchedulingPage,
    LoginPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SchedulingService, 
    {provide: Storage, useFactory: provideStorage},
    SchedulingDao
  ]
})

export class AppModule {}
