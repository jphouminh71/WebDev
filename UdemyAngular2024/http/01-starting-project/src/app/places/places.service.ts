import { DestroyRef, inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();
  private httpClient = inject(HttpClient);

  // returns observable
  loadAvailablePlaces(): Observable<Place[]> {
    return this.fetchPlaces(
      'http://localhost:3000/places',
      'error getting available places'
    );
  }

  loadUserPlaces(): Observable<Place[]> {
    return this.fetchPlaces(
      'http://localhost:3000/user-places',
      'error getting user places'
    ).pipe(
      tap({
        next: (userPlaces) => this.userPlaces.set(userPlaces),
      })
    );
  }

  addPlaceToUserPlaces(place: Place): Observable<object> {
    const prevPlaces = this.userPlaces();

    if (!prevPlaces.some((p) => p.id === place.id)) {
      this.userPlaces.update((prevPlaces) => [...prevPlaces, place]);
    }

    return this.updateUserPlaces(place).pipe(
      catchError((error) => {
        this.userPlaces.set(prevPlaces);
        return throwError(() => new Error('failed to store selected place.'));
      })
    );
  }

  removeUserPlace(place: Place) {}

  private fetchPlaces(url: string, errorMessage: string) {
    return this.httpClient.get<{ places: Place[] }>(url).pipe(
      map((resData) => resData.places),
      catchError((error) => {
        // must return new observable
        console.log(error);
        return throwError(() => {
          return new Error(errorMessage);
        });
      })
    );
  }

  private updateUserPlaces(place: Place) {
    const url = 'http://localhost:3000/user-places';
    return this.httpClient.put(url, { placeId: place.id });
  }
}
