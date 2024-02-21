import { Component } from '@angular/core';
import { ServicedemoService } from '../../servicedemo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  coffes:any[]=[];
  prasad:number=10;
  prices:string[]=['20','25','30','25','45','35','20','25','30','25','45','35','20','25','30','25','45']
  isDark:boolean=false;
  constructor(private cf:ServicedemoService){
    this.cf.getData().subscribe((data:any)=>this.coffes=data)
  }
}
