import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// CUSTOM ELEMENTS
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { BodyComponent } from './layout/body/body.component';
import { SidenavToogle } from './interfaces/layout-structure';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    SidebarComponent,
    BodyComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'personal-portfolio';
  isSidenavCollapsed = false;
  screenWidth = 0;

  onToggleSidenav(data: SidenavToogle): void {
    this.isSidenavCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth
  }
}
