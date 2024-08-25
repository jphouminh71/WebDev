import {
  Component,
  DestroyRef,
  inject
  OnInit,
} from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  imports: [RouterOutlet, RouterLink],
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  //userId = input.required<string>();
  private usersService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  userName: string = '';

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot);
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        let fetchedName =
          this.usersService.users.find((u) => u.id === paramMap.get('userId'))
            ?.name || '';
        this.userName = fetchedName;
      },
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  // userName = computed(
  //   () => this.usersService.users.find((u) => u.id === this.userId())?.name
  // );
}
