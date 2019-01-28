import { Component, ViewChild, AfterContentInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

/**
 * References
 * -------------------------------------------------------------------------------------------------
 * https://angular-maps.com/guides/getting-started/
 * https://medium.com/@balramchavan/integrating-google-maps-in-angular-5-ca5f68009f29
 */

declare var google: any;

interface Marker {
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {

  @ViewChild('gmap') gmapElement: any;

  map: google.maps.Map;
  heatmap: google.maps.visualization.HeatmapLayer;

  constructor(
    private mapsApiLoader: MapsAPILoader,
  ) { }

  ngAfterContentInit(): void {
    this.mapsApiLoader.load().then(() => {
      this.initMap();
    });
  }

  initMap() {
    this.map = new google.maps.Map(this.gmapElement.nativeElement, {
      zoom: 3.5,
      center: new google.maps.LatLng(-14, -54),
      mapTypeId: google.maps.MapTypeId.SATELLITE,
      zoomControl: false,
      streetViewControl: false,
      disableDefaultUI: true,
    });

    this.heatmap = new google.maps.visualization.HeatmapLayer({
      data: this.getPoints(),
      map: this.map,
    });
  }

  getPoints() {
    // create points
    let markers: Marker[] = [
      { "lat": -23, "lng": -46 }, { "lat": -24, "lng": -53 }, { "lat": -23, "lng": -46 }, { "lat": -23, "lng": -46 }, { "lat": -4, "lng": -37 }, { "lat": -25, "lng": -51 }, { "lat": -24, "lng": -46 }, { "lat": -23, "lng": -51 }, { "lat": -23, "lng": -47 }, { "lat": -23, "lng": -45 }, { "lat": -29, "lng": -52 }, { "lat": -23, "lng": -46 }, { "lat": -31, "lng": -54 }, { "lat": -21, "lng": -43 }, { "lat": -22, "lng": -43 }, { "lat": -23, "lng": -46 }, { "lat": -15, "lng": -47 }, { "lat": -25, "lng": -49 }, { "lat": -23, "lng": -46 }, { "lat": -25, "lng": -49 }, { "lat": -27, "lng": -48 }, { "lat": -23, "lng": -46 }, { "lat": -23, "lng": -45 }, { "lat": -23, "lng": -47 }, { "lat": -15, "lng": -56 }, { "lat": -29, "lng": -51 }, { "lat": -23, "lng": -45 }, { "lat": -25, "lng": -54 }, { "lat": -15, "lng": -56 }, { "lat": -22, "lng": -47 }, { "lat": -29, "lng": -51 }, { "lat": -26, "lng": -48 }, { "lat": -27, "lng": -49 }, { "lat": -26, "lng": -48 }, { "lat": -26, "lng": -48 }, { "lat": -20, "lng": -54 }, { "lat": -18, "lng": -48 }, { "lat": -23, "lng": -52 }, { "lat": -25, "lng": -50 }, { "lat": -26, "lng": -48 }, { "lat": -23, "lng": -47 }, { "lat": -23, "lng": -47 }, { "lat": -29, "lng": -50 }, { "lat": -23, "lng": -46 }, { "lat": -22, "lng": -47 }, { "lat": -22, "lng": -43 }, { "lat": -22, "lng": -49 }, { "lat": -20, "lng": -41 }, { "lat": -31, "lng": -54 }, { "lat": -23, "lng": -46 }
    ];

    // transforming points
    return markers.map(point =>
      new google.maps.LatLng(point.lat, point.lng));
  }
}
