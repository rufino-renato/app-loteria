import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ApostaComponent } from './components/aposta/aposta.component';
import { SorteioComponent } from './components/sorteio/sorteio.component';
import { ApostaService } from './services/aposta.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { SorteioService } from './services/sorteio.service';
import { AppServiceInterceptor } from './interceptors/app.service.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ApostaComponent,
    SorteioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApostaService,
    SorteioService,
    { provide: HTTP_INTERCEPTORS, useClass: AppServiceInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
