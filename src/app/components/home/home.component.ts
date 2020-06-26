import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: string[] = [
    'assets/images/rick-morty-1.jpg',
    'assets/images/rick-morty-2.jpg',
    'assets/images/rick-morty-3.jpg',
    'assets/images/rick-morty-4.jpg',
    'assets/images/rick-morty-5.jpg',
    'assets/images/rick-morty-6.jpg',
    'assets/images/rick-morty-7.jpg',
    'assets/images/rick-morty-8.jpg',
    'assets/images/rick-morty-9.jpg',
    'assets/images/rick-morty-10.jpg',
    'assets/images/rick-morty-1.jpg',
    'assets/images/rick-morty-6.jpg'
  ];

  activePageData = [];

  constructor() {
    this.activePageData = this.items.slice(0, 4);
  }

  ngOnInit(): void {

  }

  onPageChanged(e) {
    const currentPage = e.pageIndex * e.pageSize;
    const nextPage = currentPage + e.pageSize;
    this.activePageData = this.items.slice(currentPage, nextPage);
  }
}
