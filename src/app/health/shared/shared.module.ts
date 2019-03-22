import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item/list-item.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListItemComponent
  ]
})
export class SharedModule { }
