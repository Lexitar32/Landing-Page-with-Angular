import { Component, OnInit } from '@angular/core';
import { chefs } from '../../templates/index';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {
  chefList = chefs;
  
  constructor() { 
    
   }

  ngOnInit(): void {
  }

}
