import { Component } from '@angular/core';
import { EleccionesService } from '../../services/elecciones.service';
import { Votante } from '../../models/Votante';

@Component({
  selector: 'app-votar',
  templateUrl: './votar.component.html',
  styleUrl: './votar.component.css'
})
export class VotarComponent {
  votante: Votante = new Votante('','',0);

  constructor(private eleccionesservice: EleccionesService) {}

  public votar() {
    this.eleccionesservice.votar(this.votante).subscribe(
      result => {
        console.log('Voto enviado con éxito', result);
      }, 
      error => {
        console.log(<any>error);
      }
    );
  }
}
