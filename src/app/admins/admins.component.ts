import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  
  constructor(private Auth: AuthService, private router: Router) { }
  
  ngOnInit() {
  }
  
  loginAdmin(event) {
    event.preventDefault();
    const target  = event.target;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;
    this.Auth.getUserDetails(email, password).subscribe( data => {
      if (data.success) {
        this.router.navigate(['admin-videos']);
        this.Auth.setLoggedIn(true);
      } else {
        window.alert('Nice try wiseguy.');
      }
    });
  }
}
