import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { TravelLogModel } from 'src/app/models/travel-log.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-travel-logs',
  templateUrl: './travel-logs.component.html',
  styleUrls: ['./travel-logs.component.css']
})
export class TravelLogsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['viajante', 'dimensao', 'origem', 'destino', 'dataViagem'];
  dataSource = new MatTableDataSource<TravelLogModel>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  model: TravelLogModel[] = [];

  model1: TravelLogModel = {
    id: 1,
    viajante: 'Rick 1',
    dimensao: 'C137',
    origem: 'C135',
    destino: 'Z758',
    dataViagem: new Date()
  };

  model2: TravelLogModel = {
    id: 2,
    viajante: 'Rick 2',
    dimensao: 'C137',
    origem: 'C135',
    destino: 'Z758',
    dataViagem: new Date()
  };

  model3: TravelLogModel = {
    id: 3,
    viajante: 'Rick 3',
    dimensao: 'C137',
    origem: 'C135',
    destino: 'Z758',
    dataViagem: new Date()
  };

  constructor() { }

  ngOnInit(): void {

    for (let index = 0; index < 11; index++) {
      this.model.push(this.model1);
      this.model.push(this.model2);
      this.model.push(this.model3);
    }

    this.dataSource.data = this.model;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
