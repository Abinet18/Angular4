import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { ThankComponent } from './thank.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav.component';


@NgModule({
  declarations: [
    AppComponent,
    ThankComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',component:AppComponent},
      {path:'thank',component:ThankComponent}
    ])
  ],
  providers: [FormBuilder,DataService],
  bootstrap: [NavComponent]
})
export class AppModule { }
