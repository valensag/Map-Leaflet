import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }
  makeCapitalPopup(data: any): string { 
    return `` +
      `<div>${ data.nombre }</div>` +
      `<div>Prioridad: ${ data.priority }</div>`
  }
}
