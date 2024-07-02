import { TaskService } from './../../services/tasks.service';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITaskCreateEntry } from './createTask.model';

@Component({
  selector: 'create-task',
  templateUrl: './createTask.component.html',
  styleUrl: './createTask.component.css',
})
export class CreateTaskComponent {
  userInput: ITaskCreateEntry;
  @Input({ required: true }) userId!: string;
  @Output() cancel = new EventEmitter<void>();

  private TaskService = inject(TaskService);

  constructor() {
    this.userInput = {
      enteredTitle: '',
      enteredSummary: '',
      enteredDate: '',
    };
  }

  onCancel() {
    this.cancel.emit();
  }

  onComplete() {
    this.TaskService.addTask(this.userInput, this.userId);
    this.onCancel();
  }
}
