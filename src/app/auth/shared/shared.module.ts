import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthFormComponent} from './auth-form/auth-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [AuthFormComponent, ReactiveFormsModule]
})
export class SharedModule { }
