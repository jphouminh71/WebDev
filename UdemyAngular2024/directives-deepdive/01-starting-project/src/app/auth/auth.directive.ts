import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

// This is a structural directive.
@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDiretive {
  userType = input.required<Permission>({ alias: 'appAuth' });

  private authService = inject(AuthService);

  // telling angular that this directive will be used inside of a template
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  constructor() {
    // Runs anytime its dependencies change that its tracking.
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        // Take the content thats inside of the template ref and stick it in the container
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });

    console.log('Auth direcitve added');
  }
}
