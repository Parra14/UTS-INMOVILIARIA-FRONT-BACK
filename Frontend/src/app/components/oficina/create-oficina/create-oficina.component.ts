import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OfficeService } from 'src/app/services/oficina-services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-oficina',
  templateUrl: './create-oficina.component.html',
  styleUrls: ['./create-oficina.component.css']
})
export class CreateOficinaComponent implements OnInit {

  oficinaForm: FormGroup;

  constructor(private fb: FormBuilder, private officeService: OfficeService,
    private router: Router
  ) {
    this.oficinaForm = this.fb.group({
      idEncargado: ['', Validators.required],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      zona: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  agregarOficina() {
    if (this.oficinaForm.valid) {
      this.officeService.crearOficina(this.oficinaForm.value).subscribe(
        response => {
          console.log('Oficina creada:', response);
          this.router.navigate(['/listar-inmueble']);


          // You can add code here to redirect or show a success message
        },
        error => {
          console.error('Error al crear la oficina:', error);
        }
      );
    }
  }

}
