import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Inmueble } from 'src/app/models/inmueble';
import { InmuebleServicesService } from 'src/app/services/inmueble-services.service';

@Component({
  selector: 'app-list-inmueble',
  templateUrl: './list-inmueble.component.html',
  styleUrls: ['./list-inmueble.component.css']
})
export class ListInmuebleComponent implements OnInit {
  listaInmuebles: Inmueble[] = [];

  constructor(private inmuebleServices: InmuebleServicesService) { }

  ngOnInit(): void {
    this.inmuebleServices.getInmueble().subscribe((data: Inmueble[]) => {
      this.listaInmuebles = data;
    });
  }
  
  eliminarInmueble(id: string): void {
    // Lógica para eliminar un inmueble
  }
  

}
