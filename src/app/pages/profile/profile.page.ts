import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit
{
  public userEmail = '';

  constructor(private authService: AuthService) { }

  ngOnInit()
  {
    this.userEmail = this.authService.getCurrentUserEmail() ?? '';
  }

  onLogOut()
  {
    this.authService.logout();
  }

}
