import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  // Service vai fazer a comunicação entre os componentes: Home, ProductCrud e Header

  // BehaviorSubject vai detectar a mudança em qualquer um dos atributos do HeaderData ou em todo o objeto
  // iniciar com valores default do HeaderData
  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  // getter e setter do HeaderData
  get headerData(): HeaderData {
    // usar método value pra fazer o get
    return this._headerData.value;
  }

  set headerData(headerData: HeaderData) {
    // método next pra setar
    this._headerData.next(headerData);
  }
}
