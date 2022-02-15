import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
// import { AuthService } from '../../_service/auth.service'
// import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email;
  public password;


  constructor( private router: Router,
    private route: ActivatedRoute,
    // private authService: AuthService
    ) { }

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
  // login() {
    
  //   let credentials={
  //     email: this.email,
  //     password: this.password
    
  //   };
  //   console.log(credentials)
  //   let data=credentials
  //   //let data={data : CryptoJS.AES.encrypt(JSON.stringify(credentials), environment.cryptoSecret).toString()}
  //   console.log(data)
  //   this.authService.login(data)
  //     .subscribe(
  //       (result: any) => {
        
  //         if (result && result.response === "SUCCESS") {
  //           console.log("------------- result from login",result);
  //           this.authService.setToken(result.token);
  //           let username =(this.authService.fullName ? this.authService.fullName : this.authService.email);
  //           console.log("--------------------- :::",username)
  //           // this.router.navigate([this.returnUrl]);
            

  //         } else {
  //          console.log('in else condn....',result);
  //          alert(result.message)
  //         }
  //       },
  //       error => {
        
  //         console.log("error");
          
  //       });
  // }

}
