import { Component, Input, Output } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { CreateTaskComponent } from '../createTaskTemplate/createTask.component';
import { ITaskCreateEntry } from '../createTaskTemplate/createTask.model';
import { CardComponent } from '../shared/card.component';
import { TaskService } from '../../services/tasks.service';

@Component({
  selector: 'user-tasks',
  templateUrl: './userTasks.component.html',
  styleUrl: './userTasks.component.css',
})
export class UserTasksComponent {
  @Input() userId!: string;
  @Input() name!: string;
  showCreateTask: boolean = false;
  private _taskService: TaskService;

  constructor(tasksService: TaskService) {
    this._taskService = tasksService;
  }

  toggleCreateNewTask() {
    this.showCreateTask = !this.showCreateTask;
  }

  get selectedUserTasks() {
    return this._taskService.getUserTasks(this.userId);
  }

  onAddTask(task: ITaskCreateEntry) {
    this.toggleCreateNewTask();
    this._taskService.addTask(task, this.userId);
  }
}
