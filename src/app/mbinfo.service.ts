import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import { People } from "./my-sony/people"

@Injectable({
  providedIn: 'root'
})
export class MbinfoService{
  private mydata: People[];
   constructor(private firestore: AngularFirestore) {
    this.mydata = [];
    this.firestore.collection('people')
    .valueChanges({idField:"id"})
    .subscribe((value:People[] )=> {
      return this.mydata = value;
    },error => {
      console.log(error);
    });
  }
   get data() {
    
    return this.mydata;
  }
  public firedata():People[]{
    
    return this.data;
  }
}