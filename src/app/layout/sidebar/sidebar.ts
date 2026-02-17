import { Component } from '@angular/core';
import { SidebarInfoComponent } from './sidebar-info/sidebar-info';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarInfoComponent, SidebarNavComponent],
  standalone: true,
  templateUrl: './sidebar.html',
})
export class Sidebar {

}
