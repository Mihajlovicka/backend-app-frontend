import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router) {}

  isLoggedIn(){
    return true;
  }

  home(){
    this.router.navigate(['']);
  }

  login(){
    this.router.navigate(['/auth/login']);
  }

  logout(){
    //this.service.logOut()
    this.router.navigate(['']);
  }

  register(){
    this.router.navigate(['/auth/register']);
  }
  
}
