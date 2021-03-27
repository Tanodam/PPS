import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../servicios/auth.service';
import {User} from '../shared/user.class';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  user:User = new User()
  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit() {}

  async onRegister(){
    const user = await this.authSvc.onRegister(this.user);
    if(user){
      console.log("El usuario inició sesión correctamente.");
      this.router.navigateByUrl('home');
    }
  }

}
