import { Component} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../../shared/auth.service";

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent {
  registrationForm: FormGroup;

  constructor(
    private auth: AuthService,
    public dialogRef: MatDialogRef<RegisterDialogComponent>
  ) {
    this.registrationForm = new FormGroup({
      "login": new FormControl("", [
        Validators.required, this.loginValidator
      ]),
      "password": new FormControl("", [
        Validators.required, this.passwordValidator
      ])
    });
  }

  submit() {
    this.auth.addUser(this.registrationForm.value.login, this.registrationForm.value.password);
    this.closeDialog();
    alert('Registration success!')
  }

  loginValidator(control: FormControl): {
    [s: string]: boolean
  } | null {
    if ((control.value.split('').includes(' ')) || (control.value.length < 3)) {
      return {"login": true};
    }
    return null;
  }

  passwordValidator(control: FormControl): {
    [s: string]: boolean
  } | null {
     if ((control.value.length < 3)) {
       return {"password": true};
     }
    return null;
  }



  closeDialog() {
    this.dialogRef.close();
  }
}


