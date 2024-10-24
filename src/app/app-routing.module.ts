import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { MosaicoComponent } from './pages/mosaico/mosaico.component';
import { VideosComponent } from './pages/videos/videos.component';
import { OpinionesComponent } from './pages/opiniones/opiniones.component';

const app_routes: Routes = [
  { path: 'home', component : PortafolioComponent},
  { path: 'about', component : AboutComponent},
  { path: 'item/:id', component : ItemComponent},
  { path: 'search/:termino', component : SearchComponent},
  { path: 'mosaico', component : MosaicoComponent},
  { path: 'opiniones', component : OpinionesComponent},
  { path: 'videos', component : VideosComponent},
  { path: '**', pathMatch: 'full', redirectTo : 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
