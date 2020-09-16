import { Component, OnInit, Input } from '@angular/core';
import { Comp } from './comp';



@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  constructor() { }

  components:Comp[]=[];
  SelectedComp:Comp;
  @Input() city:string;

  ngOnInit(): void {

    this.components=[
      {id:1, name:'eklenti', author:'berk', link:'https://'},
      {id:2, name:'diger', author:'berke', link:'https://'},
      {id:3, name:'eklenti 3', author:'taylan', link:'https://'}
    ]

    

  }

  SelectComp(components:Comp){
    
    this.SelectedComp = components

  }

}
