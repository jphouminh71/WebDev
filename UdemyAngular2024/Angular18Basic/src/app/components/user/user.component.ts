import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from './user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: IUser;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'userIcons/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

/** Takeways
 *  important to understand typescript classes
 *  Signals are the new way to handle databinding because long story shorts its way more efficient.
 *  */
