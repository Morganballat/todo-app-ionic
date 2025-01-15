import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_USERS } from 'src/app/mock-data/user.mock';
import { DataService } from './data-services';

@Injectable({
    providedIn: 'root',
})
export class AuthService
{
    private users = MOCK_USERS;

    constructor(private router: Router, private dataService: DataService)
    {
        this.dataService.initLocalStorage();
    }

    login(email: string, password: string): boolean
    {
        const user = this.users.find(
            (u) => u.email === email && u.password === password
        );
        if (user)
        {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('email', email);
            sessionStorage.setItem('user', JSON.stringify(user));
            this.router.navigate(['/home']);

            return true;
        }
        return false;
    }

    isLoggedIn(): boolean
    {
        return localStorage.getItem('isLoggedIn') === 'true';
    }

    logout(): void
    {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('email');
        sessionStorage.removeItem('user');
        this.router.navigate(['login']);
    }

    getCurrentUserEmail(): string | null
    {
        return localStorage.getItem('email');
    }
}
