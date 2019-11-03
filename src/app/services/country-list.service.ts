import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CountryListService {

  URI = "https://restcountries.eu/rest/v2/all?fields=name"
  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get(this.URI);
  }

}
