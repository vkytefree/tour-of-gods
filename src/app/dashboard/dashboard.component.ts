import { Component, OnInit } from '@angular/core';
import { God } from '../god';
import { GodService } from '../god.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: God[] = [];

  constructor(private heroService: GodService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getGods()
      .subscribe(gods => this.heroes = gods.slice(1, 5));
  }
}
