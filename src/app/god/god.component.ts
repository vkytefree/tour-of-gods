import { Component, OnInit } from '@angular/core';
/** Importo la classe che ho definito nella root dell'applicazione **/
import { God } from '../god';
/** Importo l'elenco di oggetti che ho creato separatamente  **/
import { GodService } from '../god.service';

@Component({
  selector: 'app-god',
  templateUrl: './god.component.html',
  /** posso stilare un foglio di stile specifico per questo component, per tenere tutto modulare **/
  styleUrls: ['./god.component.css']
})
export class GodComponent implements OnInit {

  gods = God[];
  selectedGod: God;

  constructor() { }

  ngOnInit() {
    this.getGods();
  }

  onSelect(god: God): void {
    this.selectedGod = god;
  }

  getGods(): void {
    this.GodService.getGods()
      .subscribe(gods => this.gods = gods);
  }

}
