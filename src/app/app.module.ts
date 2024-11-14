import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProposComponent } from './propos/propos.component';
import { HomeComponent } from './home/home.component';
import { LivreComponent } from './livre/livre.component';
import { ClientComponent } from './client/client.component';
import { LoveAndOtherWordsComponent } from './love-and-other-words/love-and-other-words.component';
import { ReadComponent } from './read/read.component';
import { Love2Component } from './love2/love2.component';
import { FormsModule } from '@angular/forms';
import { TrendModule } from 'ngx-trend';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PageAccueilComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ProposComponent,
    HomeComponent,
    LivreComponent,
    ClientComponent,
    LoveAndOtherWordsComponent,
    ReadComponent,
    Love2Component,
    ChatComponent,TrendModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    TrendModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
