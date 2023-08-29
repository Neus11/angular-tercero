import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountrieRoutingsModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoutryTableComponent } from './components/coutry-table/coutry-table.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CoutryTableComponent
  ],
  imports: [
    CommonModule,
    CountrieRoutingsModule,
    SharedModule
  ]
})
export class CountriesModule { }
