import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import {  Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

@ViewChild( IonList ) cierralista : IonList;
@Input() terminada = true;

  constructor(public deseosService : DeseosService,
              private router : Router,
              private alertCtrl : AlertController) { 

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

  async editarLista(lista : Lista){

    const alert =  await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Edit List',
      //subHeader: 'Subtitle',
      //message: 'This is an alert message.',
      inputs : [
        {
        name : 'titulo' ,
        type : 'text',
        value : lista.titulo,
        placeholder : 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text : 'Cancelar',
          role : 'cancel',
          handler : ()=>{
            console.log("Cancelar");
            this.cierralista.closeSlidingItems();
          }
        },
        {
          text : 'Actualizar',
          handler : (data )=>{
            console.log(data);
            if (data.titulo.length === 0) {
              return;
            }  // Se crea la lista
           
           lista.titulo = data.titulo;
           this.deseosService.guardarStorage();
           this.cierralista.closeSlidingItems();
          
          }
        }
      ]
    });
  
    //await alert.present();
    alert.present();

  }



}
