import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina, Equipo } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) {
    this.CargarInfo();
    this.CargarEquipo();
  }

  private CargarInfo() {
    // Leer archivoJSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (response: InfoPagina) => {
      this.cargada = true;
      this.info = response;
    });
  }

  private CargarEquipo() {
    this.http.get('https://portafolio-angular-716bc.firebaseio.com/equipo.json')
    .subscribe( (response: any[]) => {
      this.equipo = response;
      console.log(response);
    });
  }
}
