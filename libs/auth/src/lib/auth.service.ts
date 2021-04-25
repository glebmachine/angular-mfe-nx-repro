import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userId = Math.round(Math.random() * 9999999);

  constructor() {
    console.log("auth: inited");
  }
}
