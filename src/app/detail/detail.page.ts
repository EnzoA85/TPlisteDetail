import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  item;
  public imageFavori = "./assets/étoileVide.png";

  constructor(private router: Router, private activeRoute : ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.item=this.router.getCurrentNavigation().extras.state.param1;
      }
    })
   }

  ngOnInit() {
  }

  addFavorie()
  {
    if (this.imageFavori=='./assets/étoileVide.png') {
  		this.imageFavori='./assets/étoilePleine.png';
  	} else {
		this.imageFavori = './assets/étoileVide.png';
  	}
  }
}
