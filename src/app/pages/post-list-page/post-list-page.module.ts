import { NgModule } from '@angular/core';
import { PostListPageComponent } from "./post-list-page/post-list-page.component";
import { PostItemComponentModule } from "../../elements/post-item/post-item.component.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ PostListPageComponent ],
  exports: [ PostListPageComponent ],
  imports: [
    PostItemComponentModule,
    CommonModule
  ]
})
export class PostListPageModule {}
