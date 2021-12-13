import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
// export class Data {
//   day: string;

//   oranges: number;
// }
export class Tab1Page {
 
  public dataSource;
  public data = [{
    day: 'Monday',
    oranges: 3,
  }, {
    day: 'Tuesday',
    oranges: 2,
  }, {
    day: 'Wednesday',
    oranges: 3,
  }, {
    day: 'Thursday',
    oranges: 4,
  }, {
    day: 'Friday',
    oranges: 6,
  }, {
    day: 'Saturday',
    oranges: 11,
  }, {
    day: 'Sunday',
    oranges: 4,
  }];
  
  ngOnInit() {
    this.dataSource=this.data
  }
}
