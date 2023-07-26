import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit{
  name: string = 'Maria';
  age: number = 11;
  job = 'programador';
  hobbies = ['Correr',  'brincar',  'jogar'];
  car = {
    name: "playu",
    year: 2005
  }

  constructor() {  }

  ngOnInit(): void {
  }

}
