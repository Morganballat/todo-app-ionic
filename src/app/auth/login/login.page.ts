import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit
{
  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit()
  {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login()
  {
    if (this.loginForm.valid)
    {
      console.log('Form Submitted', this.loginForm.value);
      // Ajoutez ici votre logique de connexion

    } else
    {
      console.log('Form not valid');
    }
  }

  ngSubmit()
  {
    console.log('Form Submitted', this.loginForm.value);
  }

}