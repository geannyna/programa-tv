import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetails } from '../../interfaces/programa.interface';
import { ProgramasService } from '../../services/programas.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {Location} from '@angular/common'
import { combineLatest } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-programa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.css']
})
export class ProgramaComponent implements OnInit {

  programa?:MovieDetails;


  constructor(config: NgbRatingConfig, private activatedRoute: ActivatedRoute, private programasSvc:ProgramasService, private location:Location, private router: Router) { 
     // customize default values of ratings used by this component tree
     config.max = 10;
     config.readonly = true;
  }

  ngOnInit() {
    const {id} = this.activatedRoute.snapshot.params;
    
    combineLatest([
      this.programasSvc.getProgramaDetalle(id), 
    ]).subscribe(([movie])=>{

      if (!movie) {
        this.router.navigateByUrl('/');
          return;
        }

        this.programa=movie;
       
    })

  }

  regresar(){

this.location.back();

  }  

}
