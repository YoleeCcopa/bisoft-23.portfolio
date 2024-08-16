import { Component } from '@angular/core';

// COMPONENTS
import { BiographyComponent } from '../../components/biography/biography.component';

// INTERFACES

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    BiographyComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
