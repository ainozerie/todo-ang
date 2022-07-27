import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ainozerie-todo';
  tasks: string[] = [
    'call mom',
    'buy milk',
    'finish project'
  ]

  delete(index: string) {
    this.tasks = this.tasks.filter(item => this.tasks.indexOf(item) !== +index);
  }
  add(newTask: string) {
    this.tasks.push(newTask);
  }

}