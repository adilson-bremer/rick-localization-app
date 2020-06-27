import { DetailsModel } from './../../models/details.model';
import { DimensionalService } from './../../services/dimensional.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: DetailsModel[] = [];

  activePageData = [];

  constructor(private dimensionalService: DimensionalService) {}

  async ngOnInit() {

    this.items = await this.dimensionalService.getViajantes();
    this.activePageData = this.items.slice(0, 6);
  }

  onPageChanged(e) {
    const currentPage = e.pageIndex * e.pageSize;
    const nextPage = currentPage + e.pageSize;
    this.activePageData = this.items.slice(currentPage, nextPage);
  }
}
