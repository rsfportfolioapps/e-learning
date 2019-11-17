import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IModel } from '../models/generic.model';
import { TakeUntilDestroy } from './destroy';

export abstract class BaseService<T> extends TakeUntilDestroy {
  constructor(private http: HttpClient) {
    super();
  }

  protected getUrl(route: string = ''): string {
    return environment.apiUrl + route;
  }

  private getToken(): string {
    return JSON.parse(localStorage.getItem('user') || null) ?
      JSON.parse(localStorage.getItem('user')).token : null;
  }

  protected commonHeaders(isUpdate: boolean = false): HttpHeaders {
    const contentType = isUpdate ? 'application/json-patch+json' : 'application/json';
    return new HttpHeaders({
      'Content-Type': contentType,
      Accept: 'application/json',
      Authorization: `Bearer ${this.getToken()}`,
    });
  }

  protected get(route: string): Observable<T> {
    const url = this.getUrl() + route;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.getToken()}`,
      Accept: 'application/json'
    });
    const options = { headers };
    return this.http.get<T>(url, options);
  }

  public getResourse(imageUrl: string): Observable<T> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.getToken()}`,
      responseType: 'blob'
    });
    const options = { headers };
    return this.http.get<T>(imageUrl, options);
  }

  protected post(route: string, object?: any): Observable<T> {
    return this.http.post<T>(this.getUrl(route), object, { headers: this.commonHeaders() });
  }

  protected delete(route: string): Observable<any> {
    return this.http.delete(this.getUrl(route), {
      headers: this.commonHeaders()
    });
  }

  protected upload(route: string, object: any): Observable<T> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.getToken()}`,
      Accept: 'application/json'
    });
    headers.set('Content-Type', 'multipart/form-data');
    return this.http.post<T>(this.getUrl(route), object, { headers });
  }

  protected put(route: string, object: any): Observable<T> {
    return this.http.put<T>(this.getUrl(route), object, { headers: this.commonHeaders(true) });
  }

  protected patch(route: string, object: any): Observable<T> {
    return this.http.patch<T>(this.getUrl(route), object, { headers: this.commonHeaders(true) }
    );
  }
}
