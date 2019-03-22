import { Injectable } from '@angular/core';
import {Store} from '../../store';
import {AuthService} from '../../auth/auth.service';
import {Observable, of} from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';

export interface Meal {
  name: string;
  ingredients: string[];
  // timestamp: number;
  key: string;
  // $exists: () => boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor(
    private store: Store,
    private db: AngularFireDatabase,
    private authService: AuthService
  ) { }

  meals$: Observable<Meal[]> = this.db.list(`meals/${this.uid}`).snapshotChanges()
    .pipe(
      map(changes => changes.map(c => ({ key: c.key, ...c.payload.val() } as Meal))),
      tap(next => this.store.set('meals', next))
    );

  get uid() {
    return this.authService.user.uid;
  }

  getMeal(key: string) {
    if (!key) { return of({}); }
    return this.store.select<Meal[]>('meals').pipe(
      filter(Boolean),
      map(meals => meals.find((meal: Meal) => meal.key === key))
    );
  }

  addMeal(meal: Meal) {
    return this.db.list(`meals/${this.uid}`).push(meal);
  }

  updateMeal(key: string, meal: Meal) {
    return this.db.object(`meals/${this.uid}/${key}`).update(meal);
  }

  removeMeal(key: string) {
    return this.db.list(`meals/${this.uid}`).remove(key);
  }
}
