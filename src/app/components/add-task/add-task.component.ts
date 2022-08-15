import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  text!: string;
  day!: string;
  reminder!: boolean;

  @Output() onAddTask : EventEmitter<Task> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const newTask:Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask)
  }

}
