import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { UVIndexModule } from '../uv-index/uv-index.module';
import { ForecastModule } from '../forecast/forecast.module';
import { CurrentWeatherModule } from '../current-weather/current-weather.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    CurrentWeatherModule,
    ForecastModule,
    UVIndexModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
