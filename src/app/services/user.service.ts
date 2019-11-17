import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BaseService } from './base.service';
import { map, takeUntil, catchError } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable()
export class UserService extends BaseService<User> {
  public loggedIn$ = new BehaviorSubject<boolean>(!this.jwtHelper.isTokenExpired());
  public user$ = new BehaviorSubject<User>(undefined);

  private authUrl = environment.apiUrl + '/';
  private userUrl = environment.apiUrl;
  constructor(http: HttpClient, protected jwtHelper: JwtHelperService) {
    super(http);
  }

  public login(auth: { email: string, password: string }): Observable<User> {
    localStorage.removeItem('token');
    return this.post(this.authUrl, auth);
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.loggedIn$.next(false);
    this.user$.next(undefined);
  }

  public authenticated(): Observable<boolean> {
    return of(!this.jwtHelper.isTokenExpired());
  }

  /**
   * refresh token should be implemented via jwt
   */
  public refreshToken() {
    this.get(`${this.userUrl}/refreshToken`)
  }

  public emailExists(email: string): Observable<any> {
    return <Observable<{ exists: boolean }>>this.post(`${this.userUrl}/exists`, { email });
  }

  public updateUser(body: User): Observable<User> {
    return <Observable<User>>this.put(this.userUrl + `/${body['id']}`, body);
  }

  public createUser(body: { email: string, phone: string, password: string, subscription?: any }): Observable<any> {
    return this.post(this.userUrl, body);
  }

  public updatePassword(body: User): Observable<User> {
    return <Observable<User>>this.put(this.userUrl + ``, body);
  }

  public resetPassword(password: string, token: string): Observable<any> {
    return <Observable<User>>this.post(this.userUrl + '/', { password, token });
  }

  public requestPasswordReset(email: { email: string }): Observable<any> {
    return <Observable<User>>this.post(this.userUrl + '/', email);
  }

  public checkNUpdatePassword(oldPassword: string, user: User): Observable<any> {
    let auth = {};
    return this.post(this.authUrl, auth).pipe(catchError(() => of()))
  }

  public verify(code: string, phone: string): Observable<any> {
    let body = { token: code, phone };
    return this.post(this.userUrl + '/', body);
  }

  public reloadUsers() {
    this.get(this.userUrl).pipe(takeUntil(this.destroy$))
      .subscribe((user: User) => { });
  }

  /**
   * jwt token should be implemented
   */
  protected handleToken(res: { token: string }): boolean {
    let data = res.token;
    localStorage.setItem('token', data);
    return !this.jwtHelper.isTokenExpired();
  }

  protected handleError(res: any) {
    if (res && res.status >= 500) {
      return Observable.throw('Server error. Please try again later');
    } else {
      let errMsg = (res.error && res.error.message) ?
        res.error.message : 'Server error';
      return Observable.throw(errMsg);
    }
  }
}