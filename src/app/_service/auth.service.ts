import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
// import  decode from 'jwt-decode';
import { catchError, map, tap } from 'rxjs/operators';

export const TOKEN_NAME: string='token';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public serverURL: string;
  onTokenRefresh=new BehaviorSubject(false)
  
  private _tokenPayload;
  private _fullName;
  
  private _profileCompleted;
  private _email;
  private _phone;
  private _roles;
  
  constructor(private http: HttpClient,) { 
    this.serverURL=environment.serverUrl;
  }


  login(data:any) {
    console.log("------------- data any",data);

    if(this.getToken()){
      this.deleteToken()
    }
    return this.http.post(this.serverURL + '/auth/login', data);
  }
  register(data:any) {
    return this.http.post(this.serverURL + '/auth/register', data);
  }
  
  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    this.decodeToken();
    localStorage.setItem(TOKEN_NAME, token);
  }

  private decodeToken() {
    if (!this._tokenPayload) {
      const token=localStorage.getItem('token');
      if (token) {
        // const payload=decode(token);
       let payload: any
        if (payload) {
          console.log(payload)
          this._tokenPayload = payload;
         
          // this._fullName = payload.fullName;
         
          // this._phone = payload.phone;
          // this._email = payload.email;
          // this._roles = payload.roles;
         
          // this._profileCompleted = payload.profileCompleted;
        }
        this.onTokenRefresh.next(true);
      }
    }
  }
 

 

  public get email(): any {
    this.decodeToken();
    return this._email;
  }
 

  public get roles(): any {
    this.decodeToken();
    return this._roles;
  }

  public get fullName(): any {
    this.decodeToken();
    return this._fullName;
  }

  public get phone(): any {
    this.decodeToken();
    return this._phone;
  }

  public get profileCompleted(): any {
    this.decodeToken();
    return this._profileCompleted;
  }

  public set profileCompleted(val:any) {
    this._profileCompleted=val;
  }


 


  deleteToken(): void {
    localStorage.removeItem(TOKEN_NAME);
    this._tokenPayload=null;
  }
}

