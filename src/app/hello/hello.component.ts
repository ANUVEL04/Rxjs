import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent  {

  constructor(private appservice : AppService){
    this.appservice.sub.subscribe(x=> console.log('from hello sub',x));
    

  }

  emit(){
    this.appservice.sendData(Math.random());
  }



}
