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
  private carteleraPage = 1;
  public cargando=false;

  constructor(private http:HttpClient) { }

  get params(){
    return{
      api_key:'45e04ff7e7fe8ba1abcea37fe5186fc3',
      language:'es-ES',
      page:this.carteleraPage.toString()
    }
  }

  getProgramas():Observable<Movie[]>{
 console.log('cargando');
 if (this.cargando) {
  return of([]);
 }

    this.cargando=true;

    return this.http.get<ProgramasResponse>(`${this.baseURL}/movie/now_playing`,{params:this.params}).pipe(
      map((res)=>res.results),
      tap(()=>{
        this.carteleraPage+=1;
        this.cargando=false;
      })
    );
  }

buscarProgramas(texto:string):Observable<Movie[]>{

/*   https://api.themoviedb.org/3/search/movie?api_key=13ee2b3b1810d881d34a3d2f4351f448&language=es-ES&page=1&include_adult=false
 */
  const params = {...this.params, page:1, query:texto};

  return this.http.get<ProgramasResponse>(`${this.baseURL}/search/movie`,{
    params
  }).pipe(
    map(res=>res.results)
  )


}  

getProgramaDetalle(id:string){

  return this.http.get< MovieDetails>(`${this.baseURL}/movie/${id}`,{
    params:this.params
  }).pipe(

    catchError(err => of(null))

  )

}

getCast(id:string):Observable<Cast[]>{

  return this.http.get<Credits>(`${this.baseURL}/movie/${id}/credits`,{
    params:this.params
  }).pipe(
    map(res=> res.cast),
    catchError(err => of([]))
  );

}
  resetProgramaPage(){
  this.carteleraPage =1;

  }
}
