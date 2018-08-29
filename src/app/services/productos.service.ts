import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;

  constructor( private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get('https://portafolio-angular-716bc.firebaseio.com/productos_idx.json')
      .subscribe( (response: Producto[]) => {
        console.log(response);
        this.cargando = false;
      });
  }
}
