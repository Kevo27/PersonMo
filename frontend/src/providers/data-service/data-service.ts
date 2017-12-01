import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PersonModel } from '../../models/PersonModel';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  constructor(public http: Http) {
    console.log('Hello DataServiceProvider Provider');
  }

  getPersons(): Observable<PersonModel[]> {
      return this.http.get('http://localhost:53837/api/Person').map(m => m.json());
  }
}
