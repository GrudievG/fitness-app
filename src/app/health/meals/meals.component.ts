import {Component, OnDestroy, OnInit} from '@angular/core';
import {Meal, MealsService} from './meals.service';
import {Observable, Subscription} from 'rxjs';
import {Store} from '../../store';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit, OnDestroy {

  constructor(
    private mealsService: MealsService,
    private store: Store
  ) { }

  meals$: Observable<Meal[]>;
  subscription: Subscription;

  ngOnInit(): void {
    this.meals$ = this.store.select<Meal[]>('meals');
    this.subscription = this.mealsService.meals$.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  removeMeal(event: Meal) {
    this.mealsService.removeMeal(event.key);
  }

}
