import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AuthPageComponent } from "./auth-page/auth-page.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RegisterDialogModule} from "../../elements/register-dialog/register-dialog.module";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [ AuthPageComponent ],
  exports: [ AuthPageComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RegisterDialogModule,
    MatButtonModule
  ]
})
export class AuthPageModule {}
