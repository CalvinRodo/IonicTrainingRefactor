import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { City } from '../models/city';
import { UserPreferencesService } from '../services/user-preferences/user-preferences.service';

@Component({
  selector: 'app-user-preferences',
  templateUrl: './user-preferences.component.html',
  styleUrls: ['./user-preferences.component.scss'],
})
export class UserPreferencesComponent implements OnInit {
  cities: Array<City>;
  city: City;
  useCelcius: boolean;

  constructor(
    private modal: ModalController,
    private userPreferences: UserPreferencesService
  ) {}

  ngOnInit() {
    this.cities = this.userPreferences.getCities();
    this.userPreferences.getCity().then(c => (this.city = c));
    this.userPreferences.getUseCelcius().then(u => (this.useCelcius = u));
  }

  dismiss() {
    this.modal.dismiss();
  }

  save() {
    this.userPreferences.setCity(this.city);
    this.userPreferences.setUseCelcius(this.useCelcius);
  }
}
