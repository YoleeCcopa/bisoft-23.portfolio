import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// COMPONENTS

// INTERFACES
import { NavItem } from '../../interfaces/layout-structure';
import { navData } from './sidebar-data';

@Component({
    selector: 'invok-sidebar',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule
    ],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
    isCollapsed = false;
    navData = navData;

    
}
