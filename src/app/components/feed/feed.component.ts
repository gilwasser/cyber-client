import { Component, Input, OnInit } from '@angular/core';
import { Feed } from 'src/app/models/feed.model';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input() feed: Feed;
  constructor(private feedsService:FeedService) { }

  ngOnInit(): void {
  }

  onLike(){
    this.feedsService.like(this.feed._id);
    this.feed.likes++;
  }

}
