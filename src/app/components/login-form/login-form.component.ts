import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      email: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  login() {
    console.log("logging");
    const val = this.form.value;

    if(val.email && val.senha) {
      this.authService.login(val.email, val.senha)
        .subscribe(
          () => {
            console.log("User is logged in");
          }
        );
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
