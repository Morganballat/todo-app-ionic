import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MOCK_USERS } from 'src/app/mock-data/user.mock';

@Injectable({
    providedIn: 'root',
})
export class AuthService
{
    private users = MOCK_USERS;

    constructor(private router: Router) { }

    login(email: string, password: string): boolean
    {
        const user = this.users.find(
            (u) => u.email === email && u.password === password
        );
        if (user)
        {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('email', email);
            this.router.navigate(['']);
            window.location.reload();
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
        this.router.navigate(['login']);
        window.location.reload();
    }

    getCurrentUserEmail(): string | null
    {
        return localStorage.getItem('email');
    }
}
