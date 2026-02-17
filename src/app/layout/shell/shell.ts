import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-shell',
  standalone: true,
  templateUrl: './shell.html',
  imports: [RouterOutlet, Sidebar],
})
export class ShellComponent {

}
