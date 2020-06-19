import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }
  cardsearch: string;

  ngOnInit(): void {
  }

  searchCard(e): void {
    e.preventDefault();
    this.router.navigate(['/search'], { queryParams: { fname: encodeURIComponent(this.cardsearch) } })
  }

}
