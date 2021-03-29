import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'legend-of-zelda-botw',
    loadChildren: () => import('./legend-of-zelda-botw/legend-of-zelda-botw.module').then(m => m.LegendOfZeldaBOTWModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
