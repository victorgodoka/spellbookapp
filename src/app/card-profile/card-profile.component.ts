import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.css'],
})
export class CardProfileComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private cardService: CardService
  ) {}

  cardProfile: any;
  ngOnInit(): void {
    const card = this.activatedRoute.snapshot.paramMap.get('card');
    this.cardService.getCardsById(card).subscribe((res) => {
      this.cardProfile = (res as any).data[0]
    });
  }

  createArray (n) {
    return Array(n);
  }
}
