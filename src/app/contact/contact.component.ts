import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryListService } from "../services/country-list.service";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  documentTypes = ['Cédula de Ciudadanía', 'Cédula de Extranjería','Tarjeta de Identidad'];

  countries = ["Pais"];

  prospect = [];

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor( private countryListService: CountryListService) { }

  ngOnInit() {
    this.getListCountry();

  }

  getListCountry(){
    this.countryListService.getCountries()
    .pipe(
      map(responseData => {
        const countryArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            countryArray.push({ ...responseData[key]})
          }
        }
        return countryArray;
      }))
    .subscribe(
      res => {
        this.countries = res;
        console.log(this.countries);
      },
      err => console.log(err)
  )
  }

  onSaveProspect(form: NgForm) {
    const value = form.value;
    this.prospect.push(value);
    console.log(this.prospect);
  }

}
