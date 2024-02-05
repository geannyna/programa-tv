// Importa los módulos y componentes necesarios de Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Importa tus componentes personalizados
import { AppComponent } from './app.component';
import { TvShowListComponent } from './tv-show-list/tv-show-list.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';

// Importa el servicio para la API
import { TmdbService } from './tmdb.service';

// Define las rutas de la aplicación
const routes = [
  { path: '', component: TvShowListComponent },
  { path: 'tv-show/:id', component: TvShowDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TvShowListComponent,
    TvShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [
    TmdbService
  ],
  bootstrap: [
  ]
  })

export class AppModule {}
