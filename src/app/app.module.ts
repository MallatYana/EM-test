import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostListPageModule} from "./pages/post-list-page/post-list-page.module";
import { AuthPageModule } from "./pages/auth-page/auth-page.module";
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { PostItemPageModule } from "./pages/post-item-page/post-item-page.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PostListPageModule,
    AuthPageModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    PostItemPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
