import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() title: string = '';
  @Input() id: number = 0;

  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  deleteHandler(event: any) {
    console.log(event.target.id);
    this.delete.emit(event.target.id);
  }
}
