import {Page} from 'ionic/ionic';

@Page({
  templateUrl: 'app/map/map.html'
})
export class MapPage {
  constructor() {
    this.map = null;
  }

  addMarkerAndInfo(latLng, infoContent) {
    var infowindow = new google.maps.InfoWindow({
      content: ['<h5>', infoContent, '</h5>'].join('')
    });

    var marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: infoContent
    });

    marker.addListener('click', function() {
      infowindow.open(this.map, marker);
    });
  }

  onInit() {
    var confrenceLocation = {lat: 55.6700698, lng: 12.5647572};

    this.map = new google.maps.Map(document.getElementById('map'), {
      center: confrenceLocation,
      zoom: 18
    });

    this.addMarkerAndInfo(confrenceLocation, 'DGI Byen');


  }
}
