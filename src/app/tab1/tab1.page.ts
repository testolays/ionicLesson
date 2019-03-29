import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  private cars;
  constructor(private carService: CarService, public loadingController: LoadingController){
  }

  ngOnInit() {
    this.carService.getCar().then(data=>{
      this.cars = data;
    })
  }

}
