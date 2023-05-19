import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LoginFormComponent>,
    private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public login() : void {
    const value = this.form.value;

    this.authService.login(value.username, value.password)
      .subscribe(
        a => {
          console.log("User is logged in");
          window.location.reload();
        }
      );
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  get username() : AbstractControl<any,any> | null {
    return this.form.get('username'); 
  }

  get password() : AbstractControl<any,any> | null {
    return this.form.get('password'); 
  }

}
