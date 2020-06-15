import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  weather: any;

  constructor(private route: ActivatedRoute, public toastController: ToastController) {
    this.route.queryParams.subscribe(params => {
      if( params && params.special){
        this.weather = JSON.parse(params.special);
        console.log(this.weather);
      }
    })
   }
  
  async save(){
    localStorage.setItem('fav', JSON.stringify(this.weather));
    const toast =  await this.toastController.create({
      message: 'Have been added to favourite',
      duration: 2000
    });
    toast.present();
    
  }
  ngOnInit() {
  }

  
}
