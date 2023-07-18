import { NgModule } from '@angular/core';
import { PostItemPageComponent } from "./post-item-page/post-item-page.component";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [ PostItemPageComponent ],
  exports: [ PostItemPageComponent ],
  imports: [
    CommonModule,
    MatButtonModule,
    AppRoutingModule,
    MatIconModule
  ]
})
export class PostItemPageModule {}
