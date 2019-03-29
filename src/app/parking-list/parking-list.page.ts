import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../parking.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.page.html',
  styleUrls: ['./parking-list.page.scss'],
})
export class ParkingListPage implements OnInit {

  private parkings;
  constructor(private parkingService: ParkingService, 
              private loading: LoadingController,
              private router: Router) { }

  ngOnInit() {
    
    this.loading.create({
      spinner: 'dots',
      message: 'loading...',
      duration: 2000
    }).then( data =>{
      data.present();
    });

    this.parkingService.getParkings().then( data=>{
      this.loading.dismiss();
      this.parkings = data;
      console.log(this.parkings);
    });
  }

  addParking(){
    this.router.navigate(['tabs/parking-list/parking-add']);
  }

}
