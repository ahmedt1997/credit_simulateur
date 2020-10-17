import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulateur-credit',
  templateUrl: './simulateur-credit.component.html',
  styleUrls: ['./simulateur-credit.component.css']
})
export class SimulateurCreditComponent implements OnInit {
  mensualite :number

  constructor() { }

  ngOnInit(): void {
  }
 

  calcule_credit(c,t,n){
   this.mensualite= (c*t/12)/(1-Math.pow((1+t/12),-n)) ;
  }
  

}
