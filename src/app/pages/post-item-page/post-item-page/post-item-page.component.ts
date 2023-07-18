import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../../shared/auth.service";

type Item = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-post-item-page',
  templateUrl: './post-item-page.component.html',
  styleUrls: ['./post-item-page.component.scss']
})

export class PostItemPageComponent implements OnInit {
  id: number;
  item: Item = { userId: 0, id: 0, title: 'loading...', body: '' };

  constructor(
    private http: HttpClient,
    private router: Router,
    private activateRoute: ActivatedRoute,
    public auth: AuthService
  ) {
    this.id = activateRoute.snapshot.params['id'];
    console.log(this.id)
  }

  ngOnInit() {
    if (!this.auth.checkIfAuth()) {
      alert('The post page is available only to authorized users')
      this.router.navigate(['/auth'])
    } else {
      this.http.get<Item>('https://jsonplaceholder.typicode.com/posts/' + this.id).subscribe(data => this.item = data)
    }
  }
}
