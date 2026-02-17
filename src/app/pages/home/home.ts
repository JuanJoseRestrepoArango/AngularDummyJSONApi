import { Component } from '@angular/core';
import { UsersListComponent } from './sections/users/users';

@Component({
  selector: 'app-home',
  imports: [UsersListComponent],
  standalone: true,
  templateUrl: './home.html',
})
export class HomeComponent {

}
 