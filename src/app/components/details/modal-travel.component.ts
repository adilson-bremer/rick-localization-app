import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-travel',
  templateUrl: './modal-travel.component.html'
})
export class ModalTravelComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
