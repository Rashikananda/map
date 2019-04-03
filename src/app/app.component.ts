import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
declare const google: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lat;
  long;
  ngOnInit(){
    if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
       console.log(pos);
       this.lat=pos.coords.latitude;
       this.long=pos.coords.longitude;
      });
    }
    this.initMap();
    var map, infoWindow;
    function initMap() {
     
    }


  }
  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    var map;
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }
  initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
    let infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
       this.handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
     this.handleLocationError(false, infoWindow, map.getCenter());
    }
    // // The location of Uluru
    // var uluru = {lat: this.lat, lng: this.long};
    // // The map, centered at Uluru
    // var map = new google.maps.Map(
    //     document.getElementById('map'), {zoom: 4, center: uluru});
    // // The marker, positioned at Uluru
    // var marker = new google.maps.Marker({position: uluru, map: map});
  }
}

