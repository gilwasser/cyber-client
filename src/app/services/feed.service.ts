import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Feed } from '../models/feed.model';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  baseUrl = 'http://localhost:3000/posts/';
  page = 1;
  size = 10;

  feeds: Feed[] = [];
  feedSub = new Subject<Feed[]>();

  constructor(private http: HttpClient) { }

  getFirstFeeds() {
    this.page = 1;
    this.getFeeds();
  }

  getFeeds() {
    this.http.get<Feed[]>(this.baseUrl + this.page + '/' + this.size).subscribe(feeds => {
      this.feeds = this.feeds.concat([...feeds]);
      this.feedSub.next([...this.feeds]);
    }, err => {
      this.feedSub.next([]);
    });
  }

  getFeedUpdateListener() {
    return this.feedSub.asObservable();
  }
}
