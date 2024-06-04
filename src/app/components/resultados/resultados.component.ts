import { Component } from '@angular/core';
import { EleccionesService } from '../../services/elecciones.service';
import { Candidato } from '../../models/Candidato';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css',
  providers: [EleccionesService]
})
export class ResultadosComponent {
  candidatos : Array<Candidato> = [];

  constructor(private eleccionesservice: EleccionesService) {}

  ngOnInit(): void {
    this.eleccionesservice.getvotes().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
