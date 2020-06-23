import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas : Lista[] = [];

  constructor() { 

    const Lista1 = new Lista("Recolectar Piedras del Infinito");
    const Lista2 = new Lista("Héroes a desaparecer");

    this.listas.push(Lista1, Lista2);

    //console.log(this.listas);

  }
}
