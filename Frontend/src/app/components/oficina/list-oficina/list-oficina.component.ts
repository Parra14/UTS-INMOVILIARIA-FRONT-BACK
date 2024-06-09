import { Component, OnInit } from '@angular/core';
import { Oficina } from 'src/app/models/oficina';
import { OfficeService } from 'src/app/services/oficina-services.service';

@Component({
  selector: 'app-listar-oficina',
  templateUrl: './list-oficina.component.html',
  styleUrls: ['./list-oficina.component.css']
})
export class ListarOficinaComponent implements OnInit {
  listaOficinas: Oficina[] = [];

  constructor(private officeService: OfficeService) {}

  ngOnInit(): void {
    this.obtenerOficinas();
  }

  obtenerOficinas() {
    this.officeService.obtenerOficinas().subscribe(
      (data: Oficina[]) => {
        this.listaOficinas = data;
      },
      error => {
        console.error('Error al obtener las oficinas:', error);
      }
    );
  }

  eliminarOficina(id: string) {
    this.officeService.eliminarOficina(id).subscribe(
      () => {
        console.log('Oficina eliminada');
        this.obtenerOficinas(); // Refresh the list after deletion
      },
      error => {
        console.error('Error al eliminar la oficina:', error);
      }
    );
  }
}
