import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LOZBOTWCookComponent } from './cook/cook.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cook'
    },
    {
        path: 'cook',
        component: LOZBOTWCookComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegendOfZeldaBOTWRouting { }
