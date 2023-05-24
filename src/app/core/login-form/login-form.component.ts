import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { catchError, retry, throwError } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LoginFormComponent>,
    private fb: FormBuilder,
    private authService: AuthService) {}

  ngOnInit() : void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() : void {
    const user: User = this.form.value;

    this.authService.login(user)
      .pipe(retry(1), catchError(error => {
        alert(error.message);
        return throwError(() => {
          return error.message;
        })}
      )).subscribe(() => {
          window.location.reload();
        });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get username() : FormControl {
    return this.form.get('username') as FormControl;
  }

  get password() : FormControl {
    return this.form.get('password') as FormControl; 
  }

}
