import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadScriptsService } from 'src/app/services/load-scripts.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService : UserService, private router : Router, private loadScript: LoadScriptsService) {loadScript.Load(["homeScript"]); }
  onlineUser : any;
  ngOnInit(): void {
    this.getOnlineUser();
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

  getOnlineUser(){
    this.userService.getCurrentUser().subscribe(
      (data : any) =>{
        this.onlineUser = data;

      }
      )
  }
}
