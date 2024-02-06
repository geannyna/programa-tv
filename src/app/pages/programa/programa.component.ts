import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetails } from '../../interfaces/programa.interface';
import { ProgramasService } from '../../interfaces/programas.interface';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {Location} from '@angular/common'
import { Cast} from '../../interfaces/credits.interface';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.css']
})
export class ProgramaComponent implements OnInit {

  programa?:MovieDetails;
  cast:Cast[]=[];

  constructor(config: NgbRatingConfig, private activatedRoute: ActivatedRoute, private programasSvc:ProgramasService, private location:Location, private router: Router) { 
     // customize default values of ratings used by this component tree
     config.max = 10;
     config.readonly = true;
  }

  ngOnInit() {
    const {id} = this.activatedRoute.snapshot.params;
    
    combineLatest([
      this.programasSvc.getPeliculaDetalle(id),
      this.programasSvc.getCast(id)  
    ]).subscribe(([movie, cast])=>{

      if (!movie) {
        this.router.navigateByUrl('/');
          return;
        }

        this.programa=movie;
        this.cast=cast;
    })

  /*   this.peliculasSvc.getPeliculaDetalle(id).subscribe(movie=>{
      //console.log(movie)
      if (!movie) {
      this.router.navigateByUrl('/');
        return;
      }
      this.pelicula=movie;        
    });
    
    this.peliculasSvc.getCast(id).subscribe(cast=>{
      this.cast=cast
      console.log(cast)
    }) */
  }

  regresar(){

this.location.back();

  }  

}
