import {CanActivate} from '@angular/router';

export class LoginGuard implements CanActivate {
  canActivate() {
    let loggedIn: boolean = Math.random() < 0.5;

    if (loggedIn) {
      console.log('已经登陆');
    } else  {
      console.log('没有登陆');
    }
return loggedIn;
}
}
