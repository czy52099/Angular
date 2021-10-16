import { Component, Inject, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MbinfoService} from "../mbinfo.service";
import {People} from "./people";

@Component({
  selector: 'app-my-sony',
  templateUrl: './my-sony.component.html',
  styleUrls: ['./my-sony.component.css'],
  providers:[
    {provide:MbinfoService,useClass:MbinfoService,multi:false}
  ]
})
export class MySonyComponent implements OnInit {
  count:number=0;
  name: string|undefined;
  mail: string|undefined;
  age :number|undefined ;
  message = '';
  items!: any;
  counts:number|undefined;
  constructor(private firestore: AngularFirestore,
              private dialog: MatDialog,
              private service: MbinfoService,) {
  }
  ngOnInit() {
    
    let _items: People[];
    new Promise((res,rso)=>{
    _items=this.service.data;
    res(_items)
    alert("promise")
  }).then((val)=>{
    alert(val)
  //   this.items= _items.filter((value,index)=>{
  //     alert("then")
  //     return index<10;
  //  })
    });


     
    
  }
  onSubmit(val:any) {
    const data = val;
    alert(JSON.stringify(val));
    this.firestore.collection('people').add(data).then(() => {
      // this.message = "Document successfully Add!"
    }).catch(error => {
      console.error("Error Add document: ", error);
    });
    this.name='';
    this.mail='';
    this.age = 0;
  }
  find(val:string) {
    this.firestore.collection('people',
      ref => ref.where('name','==',val)).valueChanges()
      .subscribe((value) => {
        this.items = value;
      },error => {
        this.message="can not get data....";
      })
  }
  delete(id:string) {
    let result = confirm('\'コメントを削除しますか？');
    if(result){
      this.firestore.collection('people').doc(id).delete().then(()=>{
        this.message="Document successfully deleted!"
        location.reload();
      }).catch(error=>{
        console.error("Error removing document: ", error);
      });
    }else {
      console.error();
    }
  }

  showDlog(id: any, name: string, mail: string, age: string) {
    const dialogRef = this.dialog.open(MyDlogComponent,{
      width: '400px',
      data: {id: id, name:name, mail:mail, age: age}
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.message=JSON.stringify(result.id+result.name);
      this.firestore.collection('people').doc(result.id).update(result).then(()=>{
        this.message="Document successfully deleted!";
        location.reload()
      }).catch(error=>{
        console.error("Error removing document: ", error);
      })
    })
  }
}
@Component({
  selector: 'app-mydlog',
  template:`
    <mat-dialog-content style="height: 300px;">
      <p>update input:</p>
      <mat-form-field>
        <input placeholder="name" type="text" matInput [(ngModel)]="data.name">
      </mat-form-field>
      <mat-form-field>
        <input placeholder="mail" type="text" matInput [(ngModel)]="data.mail">
      </mat-form-field>
      <mat-form-field>
        <input placeholder="age" type="number" matInput [(ngModel)]="data.age">
      </mat-form-field>
      <div mat-dialog-actions>
        <button mat-button [mat-dialog-close]="data">OK</button>
        <button mat-button (click)="cancel()">Cancel</button>
      </div>
    </mat-dialog-content>
  `
})
export class MyDlogComponent {
  constructor(public dialogRef: MatDialogRef<MyDlogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: People) {
  }
  cancel() {
    this.dialogRef.close();
  }
}
