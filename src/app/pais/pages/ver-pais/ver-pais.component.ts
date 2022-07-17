import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country, Translation } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;
  paisTranslate!: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.paisService.getServicioAlpha(id)),
      tap((console.log))
    )
    .subscribe(pais=> {
      this.pais= pais[0];
      this.paisTranslate=pais[0].translations
      console.log(this.paisTranslate.spa.common)
    });

    // this.activatedRoute.params
    // .subscribe(({id}) =>{
    //   this.paisService.getServicioAlpha(id)
    //   .subscribe(pais=>{

    //   })
    // })
  }

}
