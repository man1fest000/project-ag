import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {EpisodeResolver} from "./services/resolvers/episode.resolver";
import {CharactersComponent} from "./components/characters/characters.component";

const routes: Routes = [
  {path: '', component: MainLayoutComponent, runGuardsAndResolvers:'paramsOrQueryParamsChange' ,resolve:{episodes:EpisodeResolver}},
  {path: ':id', component:CharactersComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
