import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../servicios/auth.service';
import {User} from '../shared/user.class';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user:User = new User();
  public loginForm: FormGroup;
  constructor(private authSvc:AuthService, private router:Router, private formBuilder: FormBuilder ) { 
    this.loginForm = formBuilder.group({
      mail: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  ngOnInit() {}

  async onLogin(){
    const user = await this.authSvc.onLogin(this.user);
    if(user)
    {
      console.log("El usuario inició sesión correctamente");
      this.router.navigateByUrl('home');
    }
  }
}
