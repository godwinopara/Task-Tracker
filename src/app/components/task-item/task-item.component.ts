import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask = new EventEmitter()
  @Output() onToggleTask = new EventEmitter()
  faTimes = faTimes;


  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  
  }

  onDelete(task:Task){
    this.onDeleteTask.emit(task)
  }

  onToggle(task:Task){
    this.onToggleTask.emit(task)
  }
}
