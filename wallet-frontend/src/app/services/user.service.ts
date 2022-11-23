import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import baseUrl from './helper';
import { BehaviorSubject } from 'rxjs';
import { Form } from '@angular/forms';
import { coin } from 'src/assets/_models/coin.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public users: any;

  constructor(private httpClient: HttpClient) { }

  public registerUser(userReg: any) {
    
    return this.httpClient.post(`${baseUrl}/user/`, userReg)
  }
  //JWT GENERATION
  public generateToken(userLog: any) {
    console.log(baseUrl);
    return this.httpClient.post(`${baseUrl}/generate-token`, userLog)
  }

  data: BehaviorSubject<any> = new BehaviorSubject<any>('foo');

  //Log in session and stashed the token in local storage
  public loginUser(token: any) { localStorage.setItem('token', token); }

  //Save token in local storage
  public isLogged() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }
  //Log out and token expiration
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //Get token
  public getToken() {
    return localStorage.getItem('token');
  }

  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));

  }
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);

    } else {
      this.logout();
      return null;
    }
  }
  public getUserRoles() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  public getCurrentUser() {
    return this.httpClient.get(`${baseUrl}/current-user`);
  }

  public requestUserData(walletData: any) {
    return this.httpClient.post(`${baseUrl}/wallet/requestData`, walletData)

  }
  public confirmTransaction(transactionData: any) {
    return this.httpClient.post(`${baseUrl}/wallet/transaction`, transactionData)

  }
  public updateUser(updatedUser: FormData) {
    return this.httpClient.post(`${baseUrl}/user/editProfile`, updatedUser)

  }
  public getActiviySent(activityData: any) {
    console.log(activityData);
    return this.httpClient.post<any>(`${baseUrl}/activity/activityRequestSent`, activityData)
  }
  public getActiviyReceived(activityData: any) {
    console.log(activityData);
    return this.httpClient.post<any>(`${baseUrl}/activity/activityRequestRecived`, activityData)
  }
  public getImage(email : any) {
    console.log(email);
    return this.httpClient.get<any>(`${baseUrl}/image/${email}`, email)
  }

  public setUserTranfer(data: any) {
    localStorage.setItem('data', JSON.stringify(data));

  }

  public getUserTransfer() {
    let userTrans = localStorage.getItem('userTrans');
    if (userTrans != null) {
      return JSON.parse(userTrans);
    }
  }
  public deleteAccount(id : any){
    return this.httpClient.delete(`${baseUrl}/user/${id}`, id)
  }

  public getCrypto(){
    return this.httpClient.get<coin[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=false')
  }
  public changePassword(updatedPassword : any){
    return this.httpClient.post(`${baseUrl}/user/changePassword`, updatedPassword)
  }

}
