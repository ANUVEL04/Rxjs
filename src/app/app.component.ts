import { Component } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';

  fromSub = null as any;

  constructor(private appservice : AppService){
    this.appservice.sub.subscribe(x => {
        console.log("from app sub",x)
         this.fromSub = x;
 });
    this.appservice.obs.subscribe(x => {
        console.log("from app sub",x)
        this.fromSub = x;
});
    

  }
}
