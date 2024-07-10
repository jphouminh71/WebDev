import { TasksService } from '../tasks.service';

import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  private _taskService: TasksService;

  constructor(taskService: TasksService) {
    this._taskService = taskService;
  }

  onAddTask(title: string, description: string) {
    let taskData = {
      title: title,
      description: description,
    };

    this._taskService.addTask(taskData);
    this.formEl()?.nativeElement.reset();
  }
}
