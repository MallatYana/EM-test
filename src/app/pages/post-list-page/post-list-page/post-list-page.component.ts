import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../../shared/auth.service";
import { Router } from "@angular/router";

type Item = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.scss']
})

export class PostListPageComponent implements OnInit {
  constructor(
    private http: HttpClient,
    public auth: AuthService,
    private router: Router
  ) { }

  items: Item[] = []

  ngOnInit() {
    if (!this.auth.checkIfAuth()) {
      alert('The posts page is available only to authorized users')
      this.router.navigate(['/auth'])
    } else {
      this.getData();
    }
  }

  getData() {
    this.http.get<Item[]>('https://jsonplaceholder.typicode.com/posts/').subscribe(data => this.items = data)
  }


}
