import { Component } from '@angular/core';
import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  termino:string ='';
  hayError: boolean= false;
  paises: Country[]= []
  regiones:string[]=['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActivas: string ='';


  constructor(private paisService: PaisService) { }



  activarRegion(region: string){
    if(region === this.regionActivas){return;}
    this.regionActivas= region;
  }

  buscar(termino:string){
    this.hayError= false;
    this.termino=termino
    this.paisService.buscarRegion(this.termino)
    .subscribe((paises)=>{
      this.paises = paises;
      console.log(paises);
      console.log(paises[0]);
    },(err)=>{
      this.hayError = true;
      this.paises = []
    })
  }
  sugerencias(termino: string){
    this.hayError= false
  }

}
