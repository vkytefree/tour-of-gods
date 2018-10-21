import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { God } from './god';
import { GODS } from './mock-gods';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class GodService {

  constructor(private messageService: MessageService) { }

  getGods(): Observable<God[]> {
    this.messageService.add('GodService: fetched heroes');
    return of(GODS);
  }

}
