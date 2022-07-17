import { Component, Input } from '@angular/core';
import { Country } from '../../interface/pais.interface';
import { PorPaisComponent } from '../../pages/por-pais/por-pais.component';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.css']
})


export class PaisTableComponent  {

  @Input() paises: Country[] =[] 
  @Input() hayError: boolean= false;

  constructor() { }



}
