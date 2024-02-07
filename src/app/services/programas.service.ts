import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MovieDetails } from '../interfaces/programa.interface';
import { Movie, ProgramasResponse } from '../interfaces/programas.interface';
import { Cast, Credits } from '../interfaces/credits.interface';

@Injectable({
  providedIn: 'root'
})
export class ProgramasService {
  private baseURL:string ='https://api.themoviedb.org/3';
  private listPage = 1;
  public cargando=false;

  constructor(private http:HttpClient) { }

  get params(){
    return{
      api_key:'45e04ff7e7fe8ba1abcea37fe5186fc3',
      language:'es-ES',
      page:this.listPage.toString()
    }
  }

  getProgramas():Observable<Movie[]>{
 console.log('cargando');
 if (this.cargando) {
  return of([]);
 }

    this.cargando=true;

    return this.http.get<ProgramasResponse>(`${this.baseURL}/trending/tv/day?language=es-ES`,{params:this.params}).pipe(
      map((res)=>res.results),
      tap(()=>{
        this.listPage+=1;
        this.cargando=false;
      })
    );
  }

buscarProgramas(texto:string):Observable<Movie[]>{

/*   https://api.themoviedb.org/3/trending/tv/day?language=es-ES
     https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=es-ES&page=1&sort_by=popularity.desc
 */
  const params = {...this.params, page:1, query:texto};

  return this.http.get<ProgramasResponse>(`${this.baseURL}/search/program`,{
    params
  }).pipe(
    map(res=>res.results)
  )


}  

getProgramaDetalle(id:string){

  return this.http.get< MovieDetails>(`${this.baseURL}/program/${id}`,{
    params:this.params
  }).pipe(

    catchError(err => of(null))

  )

}

  resetProgramaPage(){
  this.listPage =1;

  }
}
