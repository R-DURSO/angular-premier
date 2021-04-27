import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurveService } from 'src/app/service/curve-service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  index = [0,1,2];
  values = [
    { name :"courbe 1"},{ name :"courbe 2 "},{ name:" courbe 3"}];
  constructor(private router : Router, private curvesercive : CurveService) { 

  }

  ngOnInit(): void {
  }
createCurve(){
this.router.navigate(['result']);
}
deleteCurve(){
  for(let i=0; i<3; i++){
    this.curvesercive.deleteValues(i);
  }

}
}
