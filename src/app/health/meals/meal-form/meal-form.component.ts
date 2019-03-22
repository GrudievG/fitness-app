import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Meal} from '../meals.service';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealFormComponent implements OnChanges{

  constructor( private fb: FormBuilder ) { }

  @Input() meal: Meal;

  @Output() create = new EventEmitter();
  @Output() update = new EventEmitter();
  @Output() remove = new EventEmitter();

  toggled = false;
  exists = false;
  form = this.fb.group({
    name: ['', Validators.required],
    ingredients: this.fb.array([''])
  });

  get required() {
    return (
      this.form.get('name').hasError('required') &&
      this.form.get('name').touched
    );
  }

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.meal && this.meal.name) {
      this.exists = true;
      this.emptyIngredients();

      const value = this.meal;
      this.form.patchValue(value);

      if (value.ingredients) {
        for (const item of value.ingredients) {
          this.ingredients.push(new FormControl(item));
        }
      }
    }
  }

  emptyIngredients() {
    while (this.ingredients.controls.length) {
      this.ingredients.removeAt(0);
    }
  }

  addIngredient() {
    this.ingredients.push(new FormControl(''));
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  createMeal() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  updateMeal() {
    if (this.form.valid) {
      this.update.emit(this.form.value);
    }
  }

  removeMeal() {
    this.remove.emit();
  }

  toggle() {
    this.toggled = !this.toggled;
  }
}
