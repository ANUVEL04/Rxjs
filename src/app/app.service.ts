import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable()
export class AppService{
    sub : Subject<number>;
    obs: Observable<number> ;
    behsub : BehaviorSubject<number>;

    constructor(){
        this.sub=new Subject<number>();
        this.obs=this.sub.asObservable();
        this.behsub=new BehaviorSubject<number>(1000);
    }



    sendData(data:number){
        this.sub.next(data);
    }
}