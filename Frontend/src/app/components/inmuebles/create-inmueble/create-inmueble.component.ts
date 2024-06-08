import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InmuebleServicesService } from 'src/app/services/inmueble-services.service';
import { Inmueble } from 'src/app/models/inmueble';


@Component({
  selector: 'app-create-inmueble',
  templateUrl: './create-inmueble.component.html',
  styleUrls: ['./create-inmueble.component.css']
})
export class CreateInmuebleComponent implements OnInit {

  inmuebleForm: FormGroup;


  constructor(private fb: FormBuilder,
    private inmuebleServicesService: InmuebleServicesService,
    private router: Router) {
      this.inmuebleForm = this.fb.group({
        area: ['', Validators.required],
        direccion: ['', Validators.required],
        estancias: this.fb.array([]),
        caracteristicas: this.fb.array([]),
        zona: ['', Validators.required],
        oferta: ['', Validators.required],
        valor: ['', Validators.required],
        nombrePropietario: ['', Validators.required],
        telefonoPropietario: ['', Validators.required]
      });
     }

  ngOnInit(): void {
  }

  get estancias(): FormArray {
    return this.inmuebleForm.get('estancias') as FormArray;
  }

  get caracteristicas(): FormArray {
    return this.inmuebleForm.get('caracteristicas') as FormArray;
  }

  addEstancia(): void {
    const estanciaForm = this.fb.group({
      descripcion: ['', Validators.required],
      cantidad: ['', Validators.required]
    });
    this.estancias.push(estanciaForm);
  }

  removeEstancia(index: number): void {
    this.estancias.removeAt(index);
  }

  addCaracteristica(): void {
    const caracteristicaForm = this.fb.group({
      descripcion: ['', Validators.required]
    });
    this.caracteristicas.push(caracteristicaForm);
  }

  removeCaracteristica(index: number): void {
    this.caracteristicas.removeAt(index);
  }

  agregarInmueble(): void {
    if (this.inmuebleForm.valid) {
      const nuevoInmueble: Inmueble = this.inmuebleForm.value;
      this.inmuebleServicesService.guardarInmueble(nuevoInmueble).subscribe(() => {
        this.router.navigate(['/listar-inmueble']);
      });
    }
  }

}
