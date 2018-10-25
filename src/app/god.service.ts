import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { God } from './god';
import { GODS } from './mock-gods';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GodService {

  constructor(private messageService: MessageService) { }

  getGods(): Observable<God[]> {
    // TODO: send the message _after_ fetching the gods
    this.messageService.add('GodService: fetched heroes');
    return of(GODS);
  }

  getGod(id: number): Observable<God> {
    // TODO: send the message _after_ fetching the god
    this.messageService.add(`GodService: fetched god id=${id}`);
    return of(GODS.find(god => god.id === id));
  }

}
