import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule
  ],
  exports: [
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule
  ]
})
export class MaterialModule {

}
