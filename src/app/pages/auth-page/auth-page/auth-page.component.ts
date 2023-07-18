import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RegisterDialogComponent } from "../../../elements/register-dialog/register-dialog/register-dialog.component";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { AuthService } from "../../../shared/auth.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {
  authForm : FormGroup;
  registerDialog?: MatDialogRef<RegisterDialogComponent>

  constructor(
    private dialog: MatDialog,
    public auth: AuthService,
    private router: Router,
  ){
    this.authForm = new FormGroup({
      "login": new FormControl("",[ Validators.required ]
      ),
      "password": new FormControl("", [ Validators.required ])
    });
  }

  submit(): void {
    if (!this.auth.checkIfUserExist) {
      alert('User do not exist!')
    } else
      if (this.auth.getPassword(this.authForm.value.login) === this.authForm.value.password) {
        this.auth.setIsAuth();
        alert('Log in successfully!');
        this.router.navigate(['/posts']);
      } else {
        alert('Wrong password!')
      }
  }


  openRegistrationDialog() {
    this.registerDialog = this.dialog.open(RegisterDialogComponent)
  }

}
