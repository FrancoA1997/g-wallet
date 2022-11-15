import { Component, OnInit } from '@angular/core';
import {LoadScriptsService} from "./../../services/load-scripts.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import  Swal  from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public userReg = {
    firstName : '',
    secondName : '',
    password : '',
    email : '',
    username : ''
  }

  public userLog = {
    password : '',
    username : ''
  }
  constructor(private _LoadScripts:LoadScriptsService, private userService : UserService, private snack:MatSnackBar, private router:Router) {_LoadScripts.Load(["logScript"]);}
  ngOnInit(): void {}

   loginSubmit(){
    console.log(this.userLog);
    if(this.userLog.username == '' || this.userLog.username == null){
      this.snack.open('The email field is required!', 'OK!',  {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition : 'right',

      });
      return;
    }if(this.userLog.password == '' || this.userLog.password == null){
      this.snack.open('The password field is required!', 'OK!', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition : 'right'
      });
      return;
    }
    this.userService.generateToken(this.userLog).subscribe(
    (data : any) => {
      console.log(data);
      this.userService.loginUser(data.token);
      this.userService.getCurrentUser().subscribe(
        (user : any) =>{
        this.userService.setUser(user);
        console.log(user);
          this.router.navigate(['home']);
        })
      Swal.fire({
        title: 'Glad to see you again!',
        color:'white',
        icon:'success',
        confirmButtonText: 'Continue',
        background:'#334155',
        confirmButtonColor: '#151720',
      }) },(error) => {
      console.log(error);
      Swal.fire({title: 'Opps...',
      html: 'Something went wrong',
      icon: 'error',
      color: 'white',
    confirmButtonText: 'Try again',
    confirmButtonColor: 'red',
  background: '#334155'})
    })}

  
   registerSubmit(){
    console.log(this.userReg);
    if(this.userReg.email == '' || this.userReg.email == null){
      this.snack.open('The email field is required!', 'OK!',  {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition : 'right',

      });
      return;
    }
    if(this.userReg.firstName == '' || this.userReg.firstName == null){
      this.snack.open('The name field is required!', 'OK!', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition : 'right'
      });
      return;
    }
    if(this.userReg.secondName == '' || this.userReg.secondName == null){
      this.snack.open('The surname field is required!', 'OK!', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition : 'right'
      });
      return;
    }
    if(this.userReg.password == '' || this.userReg.password == null){
      this.snack.open('The password field is required!', 'OK!', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition : 'right'
      });
      return;
    }

    this.userService.registerUser(this.userReg).subscribe(
      (data) => {
        console.log(data);
        Swal.fire({
        title: 'Welcome to G-Wallet',
        html: 'Successfully Registered', 
        icon:'success',
        color:'white',
        confirmButtonColor: '#151720',
        confirmButtonText: 'Continue',
        background:'#334155',
        })
      },(error) => {
        console.log(error);
        Swal.fire({title: 'Opps...',
        html: 'Something went wrong',
        icon: 'error',
        color: 'white',
      confirmButtonText: 'Try again',
      confirmButtonColor: 'red',
    background: '#334155'})
      }
    )
   }
   
    
   }

 


