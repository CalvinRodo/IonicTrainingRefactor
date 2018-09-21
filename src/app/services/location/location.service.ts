import { Injectable } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';

import { Location } from '../../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private defaultLocation: Location = {
    latitude: 43.073051,
    longitude: -89.40123
  };

  constructor(private platform: Platform, private geolocation: Geolocation) { }

  current(): Promise<Location> {
    if (this.platform.is('cordova')) {
      return this.geolocation.getCurrentPosition().then(loc => ({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude
      }));
    } else {
      return Promise.resolve(this.defaultLocation);
    }
  }
}
