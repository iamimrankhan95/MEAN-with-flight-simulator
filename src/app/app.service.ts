import { Injectable } from '@angular/core';
import { AppHttpService } from './app-http.service';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private appHttpService: AppHttpService
  ) { }

}
