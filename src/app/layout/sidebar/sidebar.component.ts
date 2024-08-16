import { Component, EventEmitter, Output, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// COMPONENTS

// INTERFACES
import { SidenavToogle } from '../../interfaces/layout-structure';
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
export class SidebarComponent implements OnInit {
    @Output() onToggleSidenav: EventEmitter<SidenavToogle> = new EventEmitter();

    screenWidth = 0;
    isCollapsed = false;
    navData = navData;

    @HostListener('window:resize', ['$event'])

    onResize(event: any): void {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth <= 768) {
            this.isCollapsed = false;
            this.onToggleSidenav.emit({collapsed: this.isCollapsed, screenWidth: this.screenWidth});
        }
    }

    ngOnInit(): void {
        this.screenWidth = window.innerWidth;
    }

    toggleCollapse(): void {
        if (this.isCollapsed) {
            this.isCollapsed = false;
            this.onToggleSidenav.emit({collapsed: this.isCollapsed, screenWidth: this.screenWidth});
        } else {
            this.isCollapsed = true;
            this.onToggleSidenav.emit({collapsed: this.isCollapsed, screenWidth: this.screenWidth});
        }
    }
}
