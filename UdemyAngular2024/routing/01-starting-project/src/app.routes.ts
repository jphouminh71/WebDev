import { Routes } from '@angular/router';
import { TasksComponent } from './app/tasks/tasks.component';
import { NoTaskComponent } from './app/tasks/no-task/no-task.component';
import { UserTasksComponent } from './app/users/user-tasks/user-tasks.component';
import { NewTaskComponent } from './app/tasks/new-task/new-task.component';
import { NotFoundComponent } from './app/not-found/not-found.component';
import { routes as UserRoutes } from './app/users/users.routes';
export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: UserRoutes,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
