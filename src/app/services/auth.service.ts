import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string): Observable<string> {
    if (email === 'a@a.com' && password === 'aaa') {
      return of('sdfgbdsfbadfb234wdsg').pipe(
        map(res => {
          this.setToken(res);
          return res;
        })
      );
    } else {
      return throwError('User or password incorrect!');
    }
  }

  //TODO: service for localStorage save
  setToken(t: string) {
    window.localStorage.setItem(environment.tokenKey, t);
  }

  getToken() {
    return window.localStorage.getItem(environment.tokenKey);
  }

  isLogged(): boolean {
    return this.getToken() != null;
  }
}
