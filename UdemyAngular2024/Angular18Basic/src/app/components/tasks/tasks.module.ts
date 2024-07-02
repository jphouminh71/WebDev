import { NgModule } from '@angular/core';
import { UserTasksComponent } from './userTasks.component';
import { TaskComponent } from '../task/task.component';
import { CreateTaskComponent } from '../createTaskTemplate/createTask.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserTasksComponent, TaskComponent, CreateTaskComponent],
  exports: [UserTasksComponent],
  imports: [SharedModule, CommonModule, FormsModule],
})
export class TasksModule {}
