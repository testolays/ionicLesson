import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Parking } from '../../models/parking';

@Component({
  selector: 'app-parking-add',
  templateUrl: './parking-add.page.html',
  styleUrls: ['./parking-add.page.scss'],
})
export class ParkingAddPage implements OnInit {

  parking: Parking = {
    id: undefined,
    name: undefined,
    distance: undefined,
    available: undefined,
    photo: undefined
  }
  constructor(private camera: Camera) { }

  ngOnInit() {
  }

  takePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

}
