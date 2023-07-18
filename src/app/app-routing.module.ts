import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListPageComponent } from "./pages/post-list-page/post-list-page/post-list-page.component";
import { PostItemPageComponent } from "./pages/post-item-page/post-item-page/post-item-page.component";
import { AuthPageComponent } from "./pages/auth-page/auth-page/auth-page.component";

const routes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: "full"},
  { path: 'posts', component: PostListPageComponent},
  { path: 'posts/:id', component: PostItemPageComponent},
  { path: 'auth', component: AuthPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
