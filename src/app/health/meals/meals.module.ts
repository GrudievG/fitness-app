import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealsRoutingModule } from './meals-routing.module';
import { MealsComponent } from './meals.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MealComponent } from './meal/meal.component';
import { MealFormComponent } from './meal-form/meal-form.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    MealsComponent,
    MealComponent,
    MealFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MealsRoutingModule,
    SharedModule
  ]
})
export class MealsModule { }
