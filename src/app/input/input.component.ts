import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  inputData: string | null = '';
  placeholder: string = 'any new tasks?';

  @Output() add = new EventEmitter();

  addNewTask(event: any) {
    if (event.target.value === '') {
      this.placeholder = 'can not be empty!';
      setTimeout(() => this.placeholder = 'any new tasks?', 1500);
    } else {
      this.add.emit(event.target.value);
      this.inputData = null;
    }
  }
}
