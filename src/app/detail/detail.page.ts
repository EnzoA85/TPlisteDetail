import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  item;
  public imageFavori = "./assets/étoileVide.png";

  constructor(private storage: Storage,private router: Router, private activeRoute : ActivatedRoute) {
    this.activeRoute.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.item=this.router.getCurrentNavigation().extras.state.param1;
      }
    })

    this.storage.get('favori')
      .then(
        (val)=>{
          if (val != null) {
            this.imageFavori = './assets/étoilePleine.png';
            console.log(val);
          } else {
            console.log('vide');
          }
        }
      );
    
   }

  ngOnInit() {
  }

  addFavorie(item)
  {
    if (this.imageFavori=='./assets/étoileVide.png') {
  		this.imageFavori='./assets/étoilePleine.png';
      this.storage.set('favori',item);
  	} else {
		  this.imageFavori = './assets/étoileVide.png';
      this.storage.remove('favori');
  	}
  }
}
