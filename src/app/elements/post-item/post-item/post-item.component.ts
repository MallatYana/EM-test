import { Component, Input, OnInit } from '@angular/core';

type Item = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {
  constructor() {}

  @Input() item: Item = { userId: 0, id: 0, title: '', body: '' };
}
