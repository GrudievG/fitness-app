import {Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit {

  constructor() { }

  toggled = false;

  @Input() item: any;

  @Output() remove = new EventEmitter<any>();

  ngOnInit() {
  }

  getRoute(item: any) {
    return [`../meals`, item.key];
  }

  toggle() {
    this.toggled = !this.toggled;
  }

  removeItem() {
    this.remove.emit(this.item);
  }

}
