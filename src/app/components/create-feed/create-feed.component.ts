import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { user } from 'src/app/currentUser';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-create-feed',
  templateUrl: './create-feed.component.html',
  styleUrls: ['./create-feed.component.scss']
})
export class CreateFeedComponent implements OnInit {
  feedText: FormControl;
  show = false;
  currentUser = user;

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.feedText = new FormControl('', [Validators.required, Validators.minLength(3)]);
  }

  onCreateFeed() {
    this.feedService.createFeed(this.feedText.value);
    this.resetFeed();
  }

  resetFeed(){
    this.feedText.setValue("");
  }


}
