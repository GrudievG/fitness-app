import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutsRoutingModule } from './workouts-routing.module';
import { WorkoutsComponent } from './workouts.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [WorkoutsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WorkoutsRoutingModule
  ]
})
export class WorkoutsModule { }
