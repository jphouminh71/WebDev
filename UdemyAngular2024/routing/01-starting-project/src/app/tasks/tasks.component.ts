import {
  Component,
  inject,
  input,
  computed,
  OnInit,
  DestroyRef,
  signal,
} from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Signal } from '@angular/core';
import { TasksService } from './tasks.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent implements OnInit {
  // This is automatically set by angular.
  userId = input.required<string>();
  //order = input<'asc' | 'desc'>();
  order = signal<'asc' | 'desc'>('desc');
  private tasksService = inject(TasksService);

  userTasks = computed(() => {
    return this.tasksService
      .allTasks()
      .filter((task) => task.userId === this.userId())
      .sort((a, b) => {
        if (this.order() === 'desc') {
          return a.id > b.id ? -1 : 1;
        } else {
          return a.id < b.id ? -1 : 1;
        }
      });
  });

  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    let mysusbcription = this.activatedRoute.queryParams.subscribe({
      next: (params) => this.order.set(params['order']),
    });

    this.destroyRef.onDestroy(() => mysusbcription.unsubscribe());
  }
}
