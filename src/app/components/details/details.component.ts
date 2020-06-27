import { TravelLogCreateModel } from './../../models/travel-log-create.model';
import { TravelLogModel } from 'src/app/models/travel-log.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DimensionalService } from './../../services/dimensional.service';
import { ModalTravelComponent } from './modal-travel.component';
import { DetailsModel } from './../../models/details.model';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  hasError = false;

  isLoaded = false;

  id: number;

  model: DetailsModel;

  constructor(private dimensionalService: DimensionalService, private route: ActivatedRoute,
              private dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });

    this.dimensionalService.getViajante(this.id).subscribe(viajante => {
      this.model = viajante;
      this.isLoaded = true;

    }, error => {
      this.hasError = true;
      console.log('ERROR: ' + error.message);
    });
  }

  onNewEntry() {

    const dialogRef = this.dialog.open(ModalTravelComponent, {
      data: {
        idViajante: this.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result !== 'canceled') {

        const log: TravelLogCreateModel = {
          viajanteId: this.id,
          dimensaoOrigemId: result.idOrigem,
          dimensaoDestinoId: result.idDestino,
          dataViagem: new Date()
        };

        this.dimensionalService.addLogViagem(log).subscribe(response => {

          // tslint:disable-next-line: no-string-literal
          const success = response.body['success'];

          if (success) {
            this.openSnackBar('Viagem cadastrada com sucesso!');

          } else {
            this.openSnackBar('Ocorreu um erro, tente novamente mais tarde');
          }
        });
      }

    });
  }

  openSnackBar(message: string) {

    this.snackBar.open(message, 'ENTENDIDO!', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
