import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit
{
  public isLoggedIn = false;

  constructor(private router: Router, private authService: AuthService)
  {
    this.isLoggedIn = this.authService.isLoggedIn();

  }
  ngOnInit(): void
  {
  }

  navigateTo(path: string)
  {
    this.router.navigate([`/${path}`]).then(() =>
    {
      window.location.reload();
    });


  }

}
