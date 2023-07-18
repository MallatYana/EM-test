import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterDialogComponent } from "./register-dialog/register-dialog.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [RegisterDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [
    RegisterDialogComponent,
  ],
  entryComponents: [
    RegisterDialogComponent
  ]
})
export class RegisterDialogModule { }
