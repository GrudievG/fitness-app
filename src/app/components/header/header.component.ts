import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Input() user: User;

  @Output() logout = new EventEmitter<any>();

  logoutUser() {
    this.logout.emit();
  }
}
