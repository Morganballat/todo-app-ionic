import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit
{
  public loginForm!: FormGroup;
  public errorMessage = '';
  public isLogged = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit()
  {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.isLogged = this.authService.isLoggedIn();
  }

  onLogin()
  {
    if (this.loginForm.valid)
    {
      console.log('Form Submitted', this.loginForm.value);
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      const isAuthenticated = this.authService.login(email, password);

      if (isAuthenticated)
      {
        this.router.navigate(['/home']);
      } else
      {
        alert('Invalid email or password');
      }

    }

  }
}