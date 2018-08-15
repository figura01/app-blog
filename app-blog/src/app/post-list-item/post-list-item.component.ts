import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;

  @Input() lesPosts;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt() {
    this.postLoveIts += 1;

  }

  onDontLoveIt() {
    this.postLoveIts -= 1;

  }

}
