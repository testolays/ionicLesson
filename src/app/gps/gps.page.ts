import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})
export class GpsPage implements OnInit {

  private cars;
  constructor(public loadingController: LoadingController, public carService: CarService) { }

  ngOnInit() {
    this.carService.getCar().then(data=>{
      this.cars = data;
    })
  }

}
