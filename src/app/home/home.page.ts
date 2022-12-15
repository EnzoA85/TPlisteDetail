import { Component } from '@angular/core';
import { Router,NavigationExtras} from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lstfilm:any;

  constructor(private router: Router) {
    fetch('./assets/films-json.json').then(res => res.json())
    .then(json => {
      this.lstfilm = json;
    });
  }
  affDetail(item)
  {
    let NavigationExtras: NavigationExtras = {
      state : {
      param1: item
      }
      };
    this.router.navigate(['/detail'],NavigationExtras);
  }
}
