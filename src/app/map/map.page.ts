import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';


declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map: any;
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;
  infoWindows: any = [];
  markers: any = [
    {
      title: "alveera house!",
      latitute: "23.261267505231686",
      longitude: "77.37651274407781"

    },
    {
      title: "Bilal house!",
      latitude: "23.26224018090417",
      longitude: "77.37562265464621"

    },
    {
      title: "My house!",
      latitude: "23.25787579450996",
      longitude: "77.39703595344496"
    },
    {
      title: "Nani!",
      latitude: "23.258581127014818",
      longitude: "77.36505131839095"
    }

  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.showMap();
  }

  addMarkersToMap(markers) {
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude
      })
      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker) {
    let infoWindowContent = '<div id="content">' +
      '<h2 style="font-size:30px" id="firstHeading" class"firstHeading">' + marker.title + '</h2>' +
      //'<p>Latitude: ' + marker.latitude + '</p>' +
      //'<p>Longitude: ' + marker.longitude + '</p>' +
      '<ion-button color="success" id="discription"  expand="block"   >Discription  </ion-button>' +

      '</div>';

    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);


      



    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for (let window of this.infoWindows) {
      window.close();
    }
  }


  showMap() {
    const location = new google.maps.LatLng(23.257701818913823, 77.39733028644342);
    const option = {
      center: location,
      zoom: 15,
      //disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, option);
    this.addMarkersToMap(this.markers);
  }


}


//23.25787579450996, 77.39703595344496
//23.261267505231686, 77.37651274407781

//23.258581127014818, 77.36505131839095