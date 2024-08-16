import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

// INTERFACES

@Component({
    selector: 'invok-body',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        HeaderComponent,
        FooterComponent
    ],
    templateUrl: './body.component.html',
    styleUrl: './body.component.scss'
})
export class BodyComponent {
    @Input() collapsed = false;
    @Input() screenWidth = 0;

    getBodyClass(): string {
        let styleClass = '';
        if (this.collapsed && this.screenWidth > 768) {
            styleClass = '--body-trimmed';
        } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
            styleClass = '--body-md-screen';
        }
        return styleClass;
    }
}
