import { Component, OnInit, Input } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {


@Input() terminada = true;

  constructor(public deseosService : DeseosService,
              private router : Router) { 

  }

  ngOnInit() {}

  listaSeleccionada(elemento : Lista){

    //console.log(elemento);
    if ( this.terminada === true){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${ elemento.id }`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${ elemento.id }`);
    }
   
  }

  borrarLista(lista: Lista){
    this.deseosService.borrarLista(lista);
  }

}
