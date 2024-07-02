import { TaskService } from './../../services/tasks.service';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ITask } from './task.model';
import { CardComponent } from '../shared/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: ITask;
  private tasksService = inject(TaskService);

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
