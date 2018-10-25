import { Component, OnInit } from '@angular/core';
import { God } from '../god';
import { GODS } from '../mock-gods';

import { GodService } from '../god.service';

@Component({
  selector: 'app-gods',
  templateUrl: './gods.component.html',
  styleUrls: ['./gods.component.css']
})
export class GodsComponent implements OnInit {

  gods: God[];

  constructor(private godService: GodService) { }

  ngOnInit() {
    this.getGods();
  }

  getGods(): void {
    this.godService.getGods()
      .subscribe(gods => this.gods = gods);
  }

}
