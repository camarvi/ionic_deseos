import { Component } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import { Router } from '@angular/router'

import { AlertController } from '@ionic/angular';
//import { Lista } from 'src/app/models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //elementos : any[] = [];

  constructor(public deseosService : DeseosService,
              private router : Router,
              private alertCtrl : AlertController) {

    //this.elementos = deseosService.listas;
    //console.log(this.elementos);

  }


async agregarLista(){
  
  //this.router.navigateByUrl('/tabs/tab1/agregar');
  const alert =  await this.alertCtrl.create({
    cssClass: 'my-custom-class',
    header: 'New List',
    //subHeader: 'Subtitle',
    //message: 'This is an alert message.',
    inputs : [
      {
      name : 'titulo' ,
      type : 'text',
      placeholder : 'Nombre de la lista'
      }
    ],
    buttons: [
      {
        text : 'Cancelar',
        role : 'cancel',
        handler : ()=>{
          console.log("Cancelar");
        }
      },
      {
        text : 'Crear',
        handler : (data )=>{
          console.log(data);
          if (data.titulo.length === 0) {
            return;
          }  // Se crea la lista
         
          const listaId = this.deseosService.crearLista(data.titulo);
          this.router.navigateByUrl(`/tabs/tab1/agregar/${ listaId }`);
        
        }
      }
    ]
  });

  //await alert.present();
  alert.present();

}

/*
listaSeleccionada(elemento : Lista){

  console.log(elemento);
  this.router.navigateByUrl(`/tabs/tab1/agregar/${ elemento.id }`);

}
*/
}

