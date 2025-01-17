import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit
{
  public userEmail = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit()
  {
    this.userEmail = this.authService.getCurrentUserEmail() ?? '';
  }

  onLogOut()
  {
    this.authService.logout();
  }

  goBack()
  {
    this.router.navigate(['/home']);
  }

}
