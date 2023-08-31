import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Moment } from '../../Moment';
import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core';

@Component({
  selector: 'app-moments-form',
  templateUrl: './moments-form.component.html',
  styleUrls: ['./moments-form.component.css']
})
export class MomentsFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Moment>()
  @Input() btnText!: string

  momentsForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.momentsForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('')
    });
  }

  get title() {
    return this.momentsForm.get('title')!;
  }

  get description() {
    return this.momentsForm.get('description')!;
  }

  onFileSelected(event: any) {

    const file: File = event.target.file[0]
 
    this.momentsForm.patchValue({image: file});
  }

  submit() {
    if(this.momentsForm.invalid) {
      return;
    }

    console.log(this.momentsForm.value)

    this.onSubmit.emit(this.momentsForm.value);
  }
}
