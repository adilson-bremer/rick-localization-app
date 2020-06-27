import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({providedIn: 'root'})
export class ApiUrlsSettins {

  private devUrl = 'http://localhost:55000/api/';
  private prodUrl = 'http://localhost:55000/api/';

  private baseUrl = environment.production ? this.prodUrl : this.devUrl;

  urlViajantesGet = this.baseUrl + 'viajantes';

  urlDimensoesGet = this.baseUrl + 'dimensoes';

  urlLogViagensGet = this.baseUrl + 'logviagens';

  urlLogViagensCreate = this.baseUrl + 'logviagens';
}

