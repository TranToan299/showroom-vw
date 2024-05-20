import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SketchFabComponent } from './modules/common/products/model-view-sketchfab/sketchfab.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/common/common.module').then(m => m.CustomCommonModule)
  },
 
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
