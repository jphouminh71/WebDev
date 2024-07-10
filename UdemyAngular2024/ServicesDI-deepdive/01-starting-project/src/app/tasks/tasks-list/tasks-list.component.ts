import {
  Component,
  computed,
  inject,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../tasks.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  private tasksService: TasksService;
  private selectedFilter = signal<string>('all');
  tasks: Signal<Task[]>;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
    this.tasks = computed(() => {
      switch (this.selectedFilter()) {
        case 'open':
          return this.tasksService
            .allTasks()
            .filter((x) => x.status === 'OPEN');
        case 'in-progress':
          return this.tasksService
            .allTasks()
            .filter((x) => x.status === 'IN_PROGRESS');
        case 'done':
          return this.tasksService
            .allTasks()
            .filter((x) => x.status === 'DONE');
        default:
          return this.tasksService.allTasks();
      }
    });
  }

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
