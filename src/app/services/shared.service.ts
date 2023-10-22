import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SharedService {
  showMenuChanged = new EventEmitter<boolean>();
  showMenu: boolean = false;
}
