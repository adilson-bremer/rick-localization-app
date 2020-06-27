import { TravelLogCreateModel } from './../models/travel-log-create.model';
import { ApiUrlsSettins } from './../api-urls.settings';
import { DetailsModel } from './../models/details.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { TravelLogModel } from '../models/travel-log.model';
import { DimensaoModel } from '../models/dimensao.model';

@Injectable({providedIn: 'root'})
export class DimensionalService {

  constructor(private httpClient: HttpClient, private apiUrls: ApiUrlsSettins) {}

  async getViajantes() {

    return await this.httpClient.get<DetailsModel[]>(this.apiUrls.urlViajantesGet).toPromise();
  }

  async getDimensoes() {

    return this.httpClient.get<DimensaoModel[]>(this.apiUrls.urlDimensoesGet).toPromise();
  }

  getViajante(id: number) {

    const url = `${this.apiUrls.urlViajantesGet}/${id}`;

    return this.httpClient.get<DetailsModel>(url).pipe(map(responseData => responseData));
  }

  getLogViagensViajante(id: number) {

    const url = `${this.apiUrls.urlLogViagensGet}/${id}`;

    return this.httpClient.get<TravelLogModel[]>(url).pipe(map(responseData => responseData));
  }

  addLogViagem(log: TravelLogCreateModel) {

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.httpClient.post(this.apiUrls.urlLogViagensCreate, log, { headers, observe: 'response' });
  }

}
