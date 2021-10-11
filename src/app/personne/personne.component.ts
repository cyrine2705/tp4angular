import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styles: [
  ]
})
export class PersonneComponent implements OnInit {
  @Input() name:string="";
  @Input() age:number=0;
  @Input('etud')statut:boolean=true;


  constructor() { }

  ngOnInit(): void {
  }

}
