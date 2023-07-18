import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}
  isAuthorized: boolean = false;

  addUser(login: string, password: string): void {
    localStorage.setItem(login, password)
  }

  checkIfUserExist(login: string): boolean {
    return localStorage.getItem(login) !== "undefined"
  }

  getPassword(login: string) {
    return localStorage.getItem(login)
  }

  setIsAuth(): void {
    this.isAuthorized = true
  }
  setLogOut(): void {
    this.isAuthorized = false;
  }
  checkIfAuth(): boolean {
    return this.isAuthorized;
  }

}
