import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ProposComponent } from './propos/propos.component';
import { ClientComponent } from './client/client.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { LoveAndOtherWordsComponent } from './love-and-other-words/love-and-other-words.component';
import { ReadComponent } from './read/read.component';
import { Love2Component } from './love2/love2.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'chat',component:ChatComponent},
  {path:'client',component:ClientComponent},
  {path:'contact',component:ContactComponent},
  {path:'propos',component:ProposComponent},
  {path:'page-acceuil',component:PageAccueilComponent},
  {path:'love-and-other-words',component:LoveAndOtherWordsComponent},
  {path:'read',component:ReadComponent},
  {path:'love2',component:Love2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
