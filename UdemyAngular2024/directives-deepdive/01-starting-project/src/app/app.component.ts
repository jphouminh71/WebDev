import { Component, computed, inject } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
import { AuthDiretive } from './auth/auth.directive';
import { LogDirective } from '../log.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    LogDirective,
    AuthDiretive,
    AuthComponent,
    LearningResourcesComponent,
  ],
})
export class AppComponent {
  private authService = inject(AuthService);

  isAdmin = computed(() => {
    console.log('calling auth service');

    return this.authService.activePermission() === 'admin';
  });
}