import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {name: 'Garrafa Pet', type: 'Dog', age: 9},
    {name: 'Cat Noir', type: 'Cat', age: 7},
    {name: 'Ninja', type: 'Turtle', age: 100},
    {name: 'Lady Bug', type: 'Ladybird', age: 2},
  ];

  animalDetails = ''

  constructor() {}

  ngOnInit(): void {}

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }
}
