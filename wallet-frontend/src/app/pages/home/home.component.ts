import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoadScriptsService } from 'src/app/services/load-scripts.service';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { FileHandle } from 'src/assets/_models/file-handle.model';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { userLogged } from 'src/assets/_models/customer.model';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  animation,
  // ...
} from '@angular/animations';

import { coin } from 'src/assets/_models/coin.model';

const buttonChecked = trigger('buttonChecked', [
  state(
    'checked',
    style({
      display: 'block',
      opacity: 1,
      

    })
  ),
  state(
    'unchecked',
    style({
      opacity: 0,
      display: 'none',
    })
  ),
  transition('checked => unchecked', [animate('0.3s ease')]),
  transition('unchecked => checked', [animate('0.3s ease')])
]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [buttonChecked]
})

export class HomeComponent implements OnInit {


  /* --------->WALLET DATA TO SEARCH ANOTHER WALLET<--------*/
  public walletData = {
    data: ''
  }
  /* --------->TRANSACTION MODEL FOR WITHDRAWAL REQUEST<--------*/
  public transactionData = {
    balance: '',
    alias: '',
    cvu: ''
  }
  /* --------->USER MODEL FOR UPDATE USER INFORMATION<--------*/
    updatedUser: userLogged = {
    firstName: '',
    secondName: '',
    address: '',
    phoneNumber: '',
    email: '',
    username: '',
    img: []
  }
  public updatePassword ={
    password : '',
    username : '',
    repeatPassword : ''
  }
  /* ----->VARIABLES<-------*/
  coins : coin[] = [];
  titles : String [] =[
     '#',
    'Coin',
    'Price Change',
    '24h Volume',

  ]
  users: any;
  currentUser: any;
  OnlineUser: any;
  TransferReceiver: any;
  cvuOrAlias: any;
  activiySent: any;
  activityReceived: any;
  tranferDataButtonCheck: boolean = true;
  tranferDataCheck: boolean = false;
  
  /* --------->--<--------*/
  constructor(private sanitizer: DomSanitizer, private snack: MatSnackBar, private http: HttpClient, private loadScripts: LoadScriptsService, private userService: UserService) { loadScripts.Load(["homeScript"]); }
  /* --------->FETCHING DATA ON INITIALIZATION<--------*/
  ngOnInit(): any { this.getCurrentUser(); }

  getCurrentUser() {
    this.userService.getCrypto().subscribe(
      (data) =>{
        console.log(data);
        this.coins = data;
      }
    )
    this.userService.getCurrentUser()
      .subscribe(
        (userData: any) => {
          this.currentUser = userData;
          const walletDataSent = this.currentUser.userWallet.cvu;
          this.userService.getActiviySent(this.activityFormDataRequest(walletDataSent)).subscribe(
            (data: any) => {
              
              this.activiySent = data;

            }
          );
          const walletDataReceived = this.currentUser.userWallet.alias;
          console.log("userAlias", walletDataReceived);
          this.userService.getActiviyReceived(this.activityFormDataRequest(walletDataReceived)).subscribe(
            (data: any) => {
              console.log(data);
              this.activityReceived = data;
            }
          )
        }
      );

  }
  /* ----------------activity implementations methods-------------------*/
  /* --------->ACTIVITY DATA FORM<--------*/


  activityFormDataRequest(walletData: any): FormData {
    const formData = new FormData();
    formData.append('id',
      new Blob([JSON.stringify(this.currentUser.id)], { type: 'application/json' }));
    formData.append('walletData',
      new Blob([JSON.stringify(walletData)], { type: 'application/json' }));
    return formData;
  }




  /* ----------------components implementations methods-------------------*/
  /* --------->RELOAD CURRENT PAGE<--------*/
  reloadComponent() {
    this.currentUser = this.userService.getCurrentUser().subscribe(
      (data: any) => {
        this.currentUser = data;
        window.location.reload();
      })
  }

  /* ----------------wallet implementations methods-------------------*/
  /* --------->WITHDRAW REQUEST<--------*/
  transferRequestData() {
    this.cvuOrAlias = this.walletData.data;
    console.log(this.cvuOrAlias);
    if (this.cvuOrAlias == '') {
      this.tranferDataCheck = false;
      this.tranferDataButtonCheck = true;
      this.snack.open('Must fill the information required first', 'OK!', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: 'bg-slate-700'
      });
    } else if (this.cvuOrAlias == this.currentUser.userWallet.cvu || this.cvuOrAlias == this.currentUser.userWallet.cvu) {
      this.tranferDataCheck = false;
      this.tranferDataButtonCheck = true;
      this.snack.open('Invalid CVU or ALIAS', 'Try again!', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: 'bg-slate-700'
      });
    }
    else if (this.cvuOrAlias != this.currentUser.userWallet.cvu && this.cvuOrAlias != this.currentUser.userWallet.cvu && this.cvuOrAlias != null) {
      this.userService.requestUserData(this.cvuOrAlias).subscribe(
        (data: any) => {
          if (data != '' && data != undefined && data != null) {
            this.tranferDataCheck = true;
            this.tranferDataButtonCheck = false;
            this.users = data;
            this.TransferReceiver = this.users.userWallet.alias;
          } else if (data == '' || data == undefined || data == null) {
            this.tranferDataCheck = false;
            this.tranferDataButtonCheck = true;
            this.snack.open('Invalid CVU or ALIAS', 'Try again!', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'right',
              panelClass: 'bg-slate-700'
            });

          }

        })
      this.userService.getCurrentUser().subscribe(
        (dataOnlineUser: any) => {
          this.OnlineUser = dataOnlineUser.userWallet.cvu;
        })
    }
  }
  /* --------->CONFIRM WITHDRAW REQUEST<--------*/
  transferConfirmed() {
    ///The ALIAS sent will be the one from the user that will receive the money transfer
    this.transactionData.alias = this.TransferReceiver;
    //The CVU sent will be the one from the user that is sending the money
    this.transactionData.cvu = this.OnlineUser;
    //Sending the request to the server with the data into it
    if (this.currentUser.userWallet.balance < this.transactionData.balance) {
      this.snack.open('Not enough balance', 'OK!', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });
      return;
    } else {
      this.userService.confirmTransaction(this.transactionData).subscribe(
        (data: any) => {
          Swal.fire({
            title: 'Transaction successful',
            color: 'white',
            icon: 'success',
            confirmButtonText: 'Go Back!',
            confirmButtonColor: '#151720',
            background: '#334155',
          }).then(function () {
            window.location.reload();
          });
        }
      )

    }
  }
  /* ----------------user implementations methods-------------------*/
  /* --------->UPDATE USER INFORMATION<--------*/
  updateProfile() {
    this.updatedUser.username = this.currentUser.username;
    console.log(this.updatedUser);
    const userFormData = this.prepareFormData(this.updatedUser);
    this.userService.updateUser(userFormData).subscribe(
      (data: any) => {
        this.currentUser = data;
        Swal.fire({
          title: 'User updated successfuly',
          icon: 'success',
          color: 'white',
          confirmButtonText: 'Go back',
          confirmButtonColor: '#151720',
          background: '#334155',
        }).then(function () {
          window.location.reload();
        });
      }), (error: any) => {
        console.log(error);
        Swal.fire({
          title: 'Opps...',
          html: 'Something went wrong',
          icon: 'error',
          color: 'white',
          confirmButtonText: 'Try again',
          confirmButtonColor: 'red',
          background: '#334155'
        })
      }
  }
  /* --------->DATA REQUIRED FOR USER UPDATE<--------*/
  prepareFormData(updatedUser: userLogged): FormData {
    const formData = new FormData();
    formData.append('customer',
      new Blob([JSON.stringify(updatedUser)], { type: 'application/json' })
    );
    if (updatedUser.img == null) {
      formData.append('imgFile', new Blob([JSON.stringify(null)], { type: 'application/json' }));
    } else if (updatedUser.img != null) {
      for (var i = 0; i < updatedUser.img.length; i++) {
        formData.append(
          'imgFile',
          updatedUser.img[i].file,
          updatedUser.img[i].file.name
        );
      }
    }
    return formData;
  }
  /* --------->PROFILE PICTURE SELECT EVENT<--------*/
  onFileSelected(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];
      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      console.log(fileHandle);
      this.updatedUser.img.push(fileHandle);
    }
  }

 /* ----------------Settings implementations methods-------------------*/
 /* --------->DELETE ACCOUNT FUNCTION<--------*/
  deleteAccount(){
    Swal.fire({
      title: 'Are you sure you want to delete your account?',
      icon: 'question',
      color: 'white',
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: 'Green',
      showLoaderOnConfirm: true,
      showCancelButton: true,
      cancelButtonColor: 'red',
      cancelButtonText: 'No, cancel!',
      background: '#334155',
    }).then((result) => {
      if (result.isConfirmed){
        this.userService.deleteAccount(this.currentUser.userWallet.id).subscribe(
          (data: any) =>{
            this.userService.logout();
            Swal.fire({
              title: 'Your account has been deleted',
              icon:'success',
              confirmButtonText:'Exit',
              background: '#334155',
              color: 'white',
              timer: 10000,
            }).then(function(){
              window.location.reload();
            })
          });
      } else if(result.dismiss === Swal.DismissReason.cancel){
        Swal.fire({
          title:'Cancelled!',
          html: 'Your account is safe!',
          icon:'error',
          background: '#334155',
          color: 'white',
        })
      }
      
    });
  }
  public logout(){
    this.userService.logout();
    window.location.reload();
    Swal.fire({
      title: 'See you soon!',
      icon:'success',
      color:'white',
      confirmButtonText: 'Exit',
      confirmButtonColor: '#151720',
      background:'#334155',
    }
    )
  }
  contactSupport(){
    this.snack.open('Coming soon!', 'Ok', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: 'bg-slate-700'
    });
  }
  changeTheme(){
    this.snack.open('Coming soon!', 'Ok', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: 'bg-slate-700'
    });
  }
  changePassword(){
    console.log(this.updatePassword.password);
    console.log(this.updatePassword.repeatPassword);
   if(this.updatePassword.password != this.updatePassword.repeatPassword){
    this.snack.open('Both password are not the same', 'Ok', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'bg-slate-700'
    });
  } else if(this.updatePassword.password == this.updatePassword.repeatPassword){
    this.updatePassword.username = this.currentUser.username;
    this.userService.changePassword(this.updatePassword).subscribe(
      (data : any)=>{
        Swal.fire({
          title: 'Your password was updated successfuly',
          icon:'success',
          confirmButtonText:'Go back!',
          background: '#334155',
          color: 'white',
          timer: 10000,
        }).then(function(){
          window.location.reload();
        })
      });
  }
}

}