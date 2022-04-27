import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { DettaglistanzaComponent } from './dettaglistanza/dettaglistanza.component';
import { ListaPrenComponent } from './lista-pren/lista-pren.component';

@NgModule({
  declarations: [
    AppComponent,
    DettaglistanzaComponent,
    ListaPrenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
