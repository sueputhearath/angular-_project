import { Component, OnInit } from '@angular/core';
import *as $ from 'jquery';
@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

  }
  quantity :number=0;
  i=1;
  plus(){
    if(this.i != 0){
      this.i++;
      this.quantity=this.i;
    }
  }
  min(){
    if(this.i !=0){
      this.i--;
      this.quantity=this.i;
    }
  }


  }



