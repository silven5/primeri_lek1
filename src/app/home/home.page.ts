import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  rezult: string[] ;
  constructor() {}
  ras(nn: string) {
    let n;
    this.rezult= new Array();
    n = parseInt(nn);
    for (let i = 1; i <= n; i++) {
      let str = "";
      if (i % 3 == 0) str = "Fizz";
      if (i % 5 == 0) str += "Buzz";
      if (str == "") str = i.toFixed(0);
      this.rezult.push(str);
    }
  }
}
