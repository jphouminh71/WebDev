import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([]);

  allTasks = this.tasks.asReadonly();

  constructor() {}

  addTask(taskData: { title: string; description: string }) {
    this.tasks.update((oldTasks) => {
      const newTask: Task = {
        ...taskData,
        id: Math.random().toString(),
        status: 'OPEN',
      };
      let newTaskSet = [...oldTasks, newTask];
      return newTaskSet;
    });
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) =>
      oldTasks.map((task) => {
        return task.id === taskId ? { ...task, status: newStatus } : task;
      })
    );
  }
}
