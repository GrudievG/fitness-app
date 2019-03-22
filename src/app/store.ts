import {BehaviorSubject, Observable} from 'rxjs';
import {distinctUntilChanged, pluck} from 'rxjs/operators';
import {User} from './auth/auth.service';
import {Meal} from './health/meals/meals.service';

export interface State {
  user: User;
  meals: Meal[];
  [key: string]: any;
}

const initialState: State = {
  user: undefined,
  meals: undefined
};

export class Store {

  private subject = new BehaviorSubject<State>(initialState);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  set(name: string, state: any) {
    this.subject.next({ ...this.value, [name]: state });
  }

}
