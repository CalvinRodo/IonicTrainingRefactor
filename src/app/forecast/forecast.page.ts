import { Component } from '@angular/core';

import { Subscription } from 'rxjs';

import { Forecast } from '../models/forecast';
import { IconMapService } from '../services/icon-map/icon-map.service';
import { WeatherService } from '../services/weather/weather.service';
import { ModalController } from '@ionic/angular';

import { UserPreferencesComponent } from '../user-preferences/user-preferences.component';
import { UserPreferencesService } from '../services/user-preferences/user-preferences.service';

@Component({
  selector: 'app-forecast',
  templateUrl: 'forecast.page.html',
  styleUrls: ['forecast.page.scss']
})
export class ForecastPage {

  forecast: Forecast;
  scale: string;

  private subscription: Subscription;

  constructor(
    public iconMap: IconMapService,
    private modal: ModalController,
    private userPreferences: UserPreferencesService,
    private weather: WeatherService
  ) {}

  ionViewDidLoad() {
    this.subscription = this.userPreferences.changed.subscribe(() =>
      this.getData()
    );
  }

  ionViewDidEnter() {
    this.getData();
  }

  ionViewWillUnload() {
    this.subscription.unsubscribe();
  }

  async openUserPreferences() {
    const m = await this.modal.create({
      component: UserPreferencesComponent
    });
    return await m.present();
  }

  private getData() {
    this.userPreferences.getUseCelcius().then(u => { this.scale = u ? 'C' : 'F'; });
    this.weather.forecast().subscribe(f => (this.forecast = f));
  }
}
