import { InvokeMethodExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import {CurveService} from '../service/curve-service'
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  valuesX = [];
  valuesY  = [];
    @Input() index : number;
  constructor(private curveService : CurveService) {
    this.index = 0;

   }
 


  ngOnInit(): void {
  }
  modifyval(){

  }

}
