import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth-service';
import { Project } from '../../project/models/project';
import { MOCK_PROJECTS } from 'src/app/mock-data/project.mock';

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
  public projects: Project[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  )
  {
    this.projects = MOCK_PROJECTS.map(project => ({
      ...project,
      tasks: project.tasks ?? []
    }));
  }

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
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      const isAuthenticated = this.authService.login(email, password);
      if (isAuthenticated)
      {
        localStorage.setItem('projects', JSON.stringify(this.projects));
        this.router.navigate(['/home']);
      } else
      {
        alert('Invalid email or password');
      }

    }

  }
}