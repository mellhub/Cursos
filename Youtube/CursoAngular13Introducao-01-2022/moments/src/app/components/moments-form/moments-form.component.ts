import { FormGroup } from '@angular/forms';
import { Moment } from './../../Moment';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-moments-form',
  templateUrl: './moments-form.component.html',
  styleUrls: ['./moments-form.component.css']
})
export class MomentsFormComponent implements OnInit {
  @Input() btnText!: string

  momentForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {}

  submit() {
    console.log('Enviou formulário')
  }
}
