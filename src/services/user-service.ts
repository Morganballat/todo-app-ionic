import { Injectable } from '@angular/core';
import { MOCK_USERS } from 'src/app/mock-data/user.mock';
import { User } from 'src/app/pages/auth/login/model/user';
import { AuthService } from './auth-service';

@Injectable({
    providedIn: 'root',
})
export class UserService
{
    private users = MOCK_USERS;

    constructor(private authService: AuthService) { }

    getCurrentUser(): User
    {

        const email = this.authService.getCurrentUserEmail();

        const user = this.users.find(
            (u) => u.email === email
        );
        if (!user)
        {
            throw new Error('User not found');
        }
        return user;

    }
}
