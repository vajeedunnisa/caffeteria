import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicedemoService {

  constructor(private sd:HttpClient) { }

  getData(){
    return this.sd.get('https://api.sampleapis.com/coffee/hot');
  }
}
