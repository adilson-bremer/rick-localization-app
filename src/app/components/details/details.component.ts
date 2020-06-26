import { ModalTravelComponent } from './modal-travel.component';
import { DetailsModel } from './../../models/details.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  model: DetailsModel;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

    this.model = {
      id: 10,
      dimensao: 'C137',
      imagem: 'assets/images/rick-morty-6.jpg',
      descricao: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    };
  }

  onNewEntry() {

    this.dialog.open(ModalTravelComponent, {
      data: {
        idViajante: 1
      }
    });

  }
}
