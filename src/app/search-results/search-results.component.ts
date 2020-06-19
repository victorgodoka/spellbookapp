import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../services/card.service';
import { Card } from '../models/card';
import { CardData } from '../models/card-data';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cardService: CardService
  ) {}
  cardsResults: any[];
  totalResults: any;

  paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      const _params = Object.keys(params)
        .map((p) => {
          return [p, params[p]].join('=');
        })
        .join('&');
      this.cardService.getCards(_params).subscribe((res) => {
        this.cardsResults = (res as any).data;
        this.totalResults = this.cardsResults.length
        if (this.totalResults === 1) {
          return this.router.navigate(['/card', this.cardsResults[0].id]);
        }
      });
    });
  }
}
