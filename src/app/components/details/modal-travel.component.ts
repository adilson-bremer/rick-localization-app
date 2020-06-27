import { DimensionalService } from './../../services/dimensional.service';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DimensaoModel } from 'src/app/models/dimensao.model';

@Component({
  selector: 'app-modal-travel',
  templateUrl: './modal-travel.component.html'
})
export class ModalTravelComponent implements OnInit {

  dimensoes: DimensaoModel[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dimensionalService: DimensionalService) {}

  async ngOnInit() {
    this.dimensoes = await this.dimensionalService.getDimensoes();
  }
}
