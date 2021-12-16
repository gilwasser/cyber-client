import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedListComponent } from './components/feed-list/feed-list.component';
import { FeedComponent } from './components/feed/feed.component';
import { CreateFeedComponent } from './components/create-feed/create-feed.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { DaysAgoPipe } from './pipes/days-ago.pipe';
import { LikePipe } from './pipes/like.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FeedListComponent,
    FeedComponent,
    CreateFeedComponent,
    AvatarComponent,
    DaysAgoPipe,
    LikePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
