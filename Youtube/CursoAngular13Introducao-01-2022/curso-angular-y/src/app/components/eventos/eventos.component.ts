import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  show: boolean = true

  constructor() {  }

  ngOnInit(): void {
  }

  showMenssage(): void {
    this.show = !this.show; //toggle
  }

}
