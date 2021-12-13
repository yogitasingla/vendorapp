import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  togglePassword(ele, eye) {
    if (ele.type === 'password') {
      ele.type = 'text';
      eye.name = 'eye-off-outline'
    }
    else {
      ele.type = 'password';
      eye.name = 'eye-outline'
    }
  }
}
