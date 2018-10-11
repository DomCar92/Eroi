import { Component, OnInit } from '@angular/core';
import {Eroe2} from '../eroe';
import {Eroe3} from '../eroe';

@Component({
  selector: 'app-eroi',
  templateUrl: './eroi.component.html',
  styleUrls: ['./eroi.component.css']
})
export class EroiComponent implements OnInit {

  Eroe2: Eroe2={
    id:1,
    name2:''
  };

  Eroe3: Eroe3={
    id: 2,
    name3: ''
  }

  constructor() { }

  ngOnInit() { }

}
