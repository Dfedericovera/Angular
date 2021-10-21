import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Clase1ej1Component } from './component/clase1ej1/clase1ej1.component';
import { Clase1ej2Component } from './component/clase1ej2/clase1ej2.component';
import { DirectivasComponent } from './component/directivas/directivas.component';
import { PipesComponent } from './component/pipes/pipes.component';
import { VideoComponent } from './component/video/video.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent,
    children: [
      { path: "video", component: VideoComponent },
      { path: "clase1ej1", component: Clase1ej1Component },
      { path: "clase1ej2", component: Clase1ej2Component },
      { path: "pipes", component: PipesComponent },
      { path: "directivas", component: DirectivasComponent }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
