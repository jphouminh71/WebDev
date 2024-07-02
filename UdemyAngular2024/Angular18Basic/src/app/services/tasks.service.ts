import { Injectable } from '@angular/core';
import { ITaskCreateEntry } from '../components/createTaskTemplate/createTask.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.dummyTasks = JSON.parse(tasks);
    }
  }

  public getUserTasks(userId: string) {
    let allTasks = this.dummyTasks.filter((task) => {
      return task.userId === userId;
    });
    return allTasks;
  }

  public addTask(task: ITaskCreateEntry, userId: string) {
    let taskId = 't' + this.dummyTasks.length.toString();

    this.dummyTasks.push({
      id: taskId,
      userId: userId,
      title: task.enteredTitle,
      summary: task.enteredSummary,
      dueDate: task.enteredDate,
    });
    this.saveTasks();
  }

  public removeTask(taskId: string) {
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.dummyTasks));
  }
}
