import { Component } from '@angular/core';
import { Router,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.page.html',
  styleUrls: ['./serie.page.scss'],
})
export class SeriePage {
  lstfilm:any;

  constructor(private router: Router) {
    fetch('http://localhost:3000/series').then(res => res.json())
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

