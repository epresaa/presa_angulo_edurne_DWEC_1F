import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotarComponent } from './components/votar/votar.component';
import { ResultadosComponent } from './components/resultados/resultados.component';

const routes: Routes = [
  {path: 'votar', component: VotarComponent},
  {path: 'resultados', component: ResultadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
