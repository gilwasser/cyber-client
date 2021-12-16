import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Feed } from 'src/app/models/feed.model';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit, OnDestroy {

  feedSubscription: Subscription = new Subscription();
  feeds: Feed[] = [];

  loadMoreMessage = 'Load more';

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.feedService.getFirstFeeds();

    this.feedSubscription = this.feedService.getFeedUpdateListener().subscribe((feeds) => {
      if (feeds.length == 0){
        this.loadMoreMessage = 'No more posts!';
        return;
      }
      this.feeds = feeds;
    });
  }

  ngOnDestroy(): void {
    this.feedSubscription.unsubscribe();
  }

  onLoadMoreClick() {
    this.feedService.getMoreFeeds();
  }


}
