import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: any[] = [];

  activePageData = [];

  constructor() {}

  ngOnInit(): void {

    for (let i = 1; i < 11; i++) {
      this.items.push({
        id: i,
        imagem: 'assets/images/rick-morty-' + i + '.jpg'
      });
    }

    this.activePageData = this.items.slice(0, 6);
  }

  onPageChanged(e) {
    const currentPage = e.pageIndex * e.pageSize;
    const nextPage = currentPage + e.pageSize;
    this.activePageData = this.items.slice(currentPage, nextPage);
  }
}
