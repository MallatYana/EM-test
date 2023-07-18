import { NgModule } from '@angular/core';
import { PostItemComponent} from "./post-item/post-item.component";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [ PostItemComponent ],
  exports: [ PostItemComponent ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PostItemComponentModule {}
