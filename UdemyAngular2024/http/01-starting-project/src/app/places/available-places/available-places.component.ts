import { PlacesService } from './../places.service';
import { Place } from './../place.model';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  private destroyRef = inject(DestroyRef);
  private placesService = inject(PlacesService);
  isFetching = signal(false);
  errorReceived = signal('');

  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.placesService.loadAvailablePlaces().subscribe({
      next: (response) => {
        this.places.set(response);
      },
      error: (error: Error) => {
        this.errorReceived.set(error.message);
      },
      complete: () => {
        this.isFetching.set(false);
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onSelectPlace(selectedPlace: Place) {
    const subscription = this.placesService
      .addPlaceToUserPlaces(selectedPlace)
      .subscribe({
        next: (response) => console.log(response),
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}

/**
 * HttpClient returns an observable object so we gotta leverage some rxjs here.
 */
