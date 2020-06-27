import { DimensionalService } from './../../services/dimensional.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { TravelLogModel } from 'src/app/models/travel-log.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { error } from 'protractor';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-travel-logs',
  templateUrl: './travel-logs.component.html',
  styleUrls: ['./travel-logs.component.css']
})
export class TravelLogsComponent implements OnInit, AfterViewInit {

  id: number;

  displayedColumns: string[] = ['origem', 'destino', 'dataViagem'];
  dataSource = new MatTableDataSource<TravelLogModel>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  model: TravelLogModel[] = [];

  constructor(private dimensionalService: DimensionalService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });

    this.dimensionalService.getLogViagensViajante(this.id).subscribe(logs => {
        this.model = logs;
        this.dataSource.data = this.model;

    }, e => {
      console.log('ERROR: ' + e.message);
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
