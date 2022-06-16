import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {


    auth = false;

    isAuthenticated(): boolean {
        return this.auth;
    }


    login() {
        console.log('login')
        this.auth = true;
    }

    logout() {
        console.log('logout')
        this.auth = false;
    }

}
