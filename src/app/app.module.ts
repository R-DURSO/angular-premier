import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { SaerchBarComponent } from './view/saerch-bar/saerch-bar.component';
import { ResultComponent } from './view/result/result.component';
import { MainpageComponent } from './view/mainpage/mainpage.component';
import { CurveComponent } from './service/curve/curve.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    SaerchBarComponent,
    ResultComponent,
    MainpageComponent,
    CurveComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
