import { InvokeMethodExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import {CurveService} from '../service/curve-service'
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  valuesX = [0,0,0,0,0];
  valuesY  = [0,0,0,0,0];
  status : boolean;
    @Input() index : number;
  constructor(private curveService : CurveService) {
    this.index = 0;
    this.status = false ;
   }
 


  ngOnInit(): void {
  }
  modifyval(){
    this.curveService.modifyValues( this.index, this.valuesX , this.valuesY);
    this.curveService.modifyStatus(this.index);
  }
  deleteVal(){
    this.curveService.deleteValues(this.index);
    this.curveService.modifyStatus(this.index);
  }
  getStatus(){
    return  this.curveService.getStatus(this.index);
  }
}
