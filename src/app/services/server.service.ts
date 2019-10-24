import { Injectable } from '@angular/core';
import {Server} from '../models/server';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  public static servers: Array<Server> = [
    new Server("HAPI FHIR DSTU3 Test Server", "http://hapi.fhir.org/baseDstu3")
  ];
  constructor() { }
}

