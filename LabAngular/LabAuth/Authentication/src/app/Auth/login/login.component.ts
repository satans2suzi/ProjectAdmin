import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthService } from 'src/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit(): void {
  }
  signIn(credentials): void {
    this.authService.login(credentials)
      .subscribe(result => {
        if (result){
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/']);
        }else{
          this.invalidLogin = true;
        }
      });
  }
}
