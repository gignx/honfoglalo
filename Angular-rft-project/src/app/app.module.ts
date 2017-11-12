import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GameComponent } from './game/game.component';
import { MenuComponent } from './menu.component';
import { HomeComponent } from './home/home.component';

import { CONST_ROUTING } from './app.routing';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';

import { AlertService, AuthenticationService, UserService, ChatService, QuestionService } from './_services/index';
import { AuthGuard } from './_guards/index';
import { RegisterComponent } from './register/register.component';
import { ChatregComponent } from './chatreg/chatreg.component';
import { ChatComponent } from './chat/chat.component';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { NewchatComponent } from './newchat/newchat.component';
import { NewChatService } from './_services/newchat.service';

const config: SocketIoConfig = { url: 'http://localhost:8080', options: {} };



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    NotFoundComponent,
    GameComponent,
    MenuComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    ChatregComponent,
    ChatComponent,
    NewchatComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    SocketIoModule.forRoot(config),

    CONST_ROUTING
  ],
  providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        ChatService,
        QuestionService,
        NewChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }