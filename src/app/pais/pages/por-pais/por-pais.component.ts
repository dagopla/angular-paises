import { Component } from '@angular/core';
import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent  {

  termino:string ='';
  hayError: boolean= false;
  paises: Country[]= []
  paisesSugeridos: Country[]=[];
  mostrarSugerencias: boolean= true;



  constructor(private paisService: PaisService) { }

  buscar(termino:string){
    this.mostrarSugerencias= false;
    this.hayError= false;
    this.termino=termino
    this.paisService.buscarPais(this.termino)
    .subscribe((paises)=>{
      this.paises = paises;
      console.log(paises);
      console.log(paises[0]);
    },(err)=>{
      this.hayError = true;
      this.paises = []
    });
  }
  sugerencias(termino: string){
    this.mostrarSugerencias=true;
    this.hayError= false;

    this.paisService.buscarPais(termino)
    .subscribe(paises=> this.paisesSugeridos = paises.splice(0,4))
  }


}
