import {Country} from '@core/models/country.model';

export interface Region {
  regionId: number;
  country: Country;
  name: string;
}
