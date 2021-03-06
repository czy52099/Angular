import { Component, OnInit } from '@angular/core';
import { Stargdata } from './stargdata';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  title: string;
  message: string;
  getstargdt: Stargdata;
  count: number;
  mig: string;
  show: boolean;
  constructor() { 
    this.show = false;
    this.mig='';
    this.getstargdt={listNum:0,name:''};
    this.title='';
    this.message='';
    this.count=0;
    let cunt=0;
    console.log(cunt);
  }
  array=['a','b','c','a'];
  getstargdata(): Stargdata{
    let a = 8;
    let name ='chen';
    return { listNum: a, name: name};
  }

  ngOnInit(): void {
    this.show = false;
    this.getstargdt = this.getstargdata();
    this.mig='https://www.sony.jp/header-footer/header/images/logo.png';
    this.title="Support page;";
    this.message="ようこそ！";
  }
}
