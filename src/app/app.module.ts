import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaerchBarComponent } from './view/saerch-bar/saerch-bar.component';
import { ResultComponent } from './view/result/result.component';
import { MainpageComponent } from './view/mainpage/mainpage.component';
import { CurveComponent } from './service/curve/curve.component';
import { SelectComponent } from './select/select.component';
import  {RouterModule, Routes} from "@angular/router";


const appRoutes : Routes =[
    {path : 'result', component : ResultComponent },
    {path : 'main', component : MainpageComponent  },
    {path : '', component : MainpageComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    SaerchBarComponent,
    ResultComponent,
    MainpageComponent,
    CurveComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
