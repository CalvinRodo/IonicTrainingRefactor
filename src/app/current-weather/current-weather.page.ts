import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IconMapService } from '../services/icon-map/icon-map.service';
import { WeatherService } from '../services/weather/weather.service';
import { Weather } from '../models/weather';
import { ModalController } from '@ionic/angular';

import { UserPreferencesService } from '../services/user-preferences/user-preferences.service';
import { UserPreferencesComponent } from '../user-preferences/user-preferences.component';

@Component({
  selector: 'app-current-weather',
  templateUrl: 'current-weather.page.html',
  styleUrls: ['current-weather.page.scss']
})
export class CurrentWeatherPage implements OnInit, OnDestroy{
  cityName: string;
  scale: string;
  currentWeather: Weather;

  private subscription: Subscription;

  constructor(
    public iconMap: IconMapService,
    private modal: ModalController,
    private userPreferences: UserPreferencesService,
    private weather: WeatherService
  ) {}

  ngOnInit() {
    this.subscription = this.userPreferences.changed.subscribe(() =>
      this.getData()
    );
  }

  ionViewDidEnter() {
    this.getData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async openUserPreferences() {
    const m = await this.modal.create({
      component: UserPreferencesComponent
    });
    return await m.present();
  }

  private getData() {
    this.userPreferences.getCity().then(c => (this.cityName = c.name));
    this.userPreferences.getUseCelcius().then(u => {
      this.scale = u ? 'C' : 'F';
    });
    this.weather.current().subscribe(w => (this.currentWeather = w));
  }
}
