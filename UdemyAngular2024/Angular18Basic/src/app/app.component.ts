import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummyUsers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = '';

  get selectedUser() {
    return this.users.find((user) => {
      return user.id === this.selectedUserId;
    });
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
