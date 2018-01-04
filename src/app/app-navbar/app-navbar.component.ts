import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {
public toggleLoggedIn;
  constructor(private authService: AuthService) {
    this.authService.isAuthentcated().subscribe(success =>
      this.toggleLoggedIn = success
    );
  }

  ngOnInit() {
  }
logout() {
  this.authService.logout();
}
}
