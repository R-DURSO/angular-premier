import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaerchBarComponent } from './view/saerch-bar/saerch-bar.component';
import { ResultComponent } from './view/result/result.component';
import { MainpageComponent } from './view/mainpage/mainpage.component';
import { SelectComponent } from './select/select.component';
import  {RouterModule, Routes} from "@angular/router";
import {CurveService} from './service/curve-service';

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
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [
    CurveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
