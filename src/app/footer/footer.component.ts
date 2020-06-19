import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private router: Router, private cardService: CardService) {}
  id: any;
  ngOnInit(): void {}

  randomCard(e) {
    e.preventDefault();
    this.cardService.getRandomCard().subscribe((res) => {
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this.router.navigate(['/card', (res as any).id]);
    });
  }
}
