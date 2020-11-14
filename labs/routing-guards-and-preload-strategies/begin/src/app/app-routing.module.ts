import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import {
  PreloadSelectedModulesList,
  NetworkAwarePreloadStrategy
} from "./core";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "heroes" },
  {
    path: "heroes",
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path: "villains",
    loadChildren: () => import('./villains/villains.module').then(m => m.VillainsModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes
// Uncomment the line of code below. Put the Preload Strategy here
// PreloadAllModules
// PreloadSelectedModulesList,
// NetworkAwarePreloadStrategy
// { preloadStrategy: PreloadAllModules }
, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
