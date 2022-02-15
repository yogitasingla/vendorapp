import { Component, OnInit } from '@angular/core';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { Vendor } from 'src/app/_model/vendor';
import {Constants} from 'src/app/_common/constant'
// import { AuthService } from '../../_service/auth.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
   public seller_name;
   public Business_name;
   public business_type;
   public email;
   public mobile_no;
   public password;
   public location;

//    geoencoderOptions: NativeGeocoderOptions = {
//     useLocale: true,
//     maxResults: 5
// };

  constructor(
    // private geolocation: Geolocation,
    // private nativeGeocoder: NativeGeocoder,
    // private authService: AuthService
    ) { }

  ngOnInit() {
  //  this.getlocation()
  }
  // getlocation(){
   
  //     this.geolocation.getCurrentPosition()
  //         .then((resp) => {

  //             // this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);
  //               console.log('------resp',resp) 
  //         }).catch((error) => {
  //             console.log('Error getting location', error);
  //         });
  //       }

  //geocoder method to fetch address from coordinates passed as arguments
  // getGeoencoder(latitude, longitude) {
  //     this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
  //         .then((result: NativeGeocoderResult[]) => {
  //              console.log('result',result)
  //            const address = this.generateAddress(result[0]);
  //            console.log('address----------',address)
  //         })
  //         .catch((error: any) => {
  //           console.log('error',error)
  //            alert('Error getting location' + JSON.stringify(error));
  //         });
  // }

  //Return Comma saperated address
  // generateAddress(addressObj) {
  //     let obj = [];
  //     let address = "";
  //     for (let key in addressObj) {
  //         obj.push(addressObj[key]);
  //     }
  //     obj.reverse();
  //     for (let val in obj) {
  //         if (obj[val].length)
  //             address += obj[val] + ', ';
  //     }
  //     console.log('999999',address);
  //     return address.slice(0, -2);
  // }
  
  // register(){
  //   let vendor=new Vendor();
  //   vendor.fullName=this.seller_name.trim()
  //   vendor.phone=this.mobile_no.trim()
  //   vendor.password=this.password.trim()
  //   vendor.email=this.email.trim()
    
  //   vendor.status=Constants.status.Inactive
   
  //   vendor.lastLogin=null;
  //   vendor.createdBy="system"
  //   vendor.modifiedBy="system"
  //   vendor.roles.push(Constants.roles.Vendor);

  //   // this.authenticationService.signup(data)
  //   //   .subscribe(
  //   //     (result: any) => {})
  // }

}
