import { Component } from '@angular/core';

// COMPONENTS
import { BiographyComponent } from '../../components/biography/biography.component';
import { IdentyComponent } from '../../components/identy/identy.component';
import { MissionVisionComponent } from '../../components/mission-vision/mission-vision.component';

// INTERFACES

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    BiographyComponent,
    IdentyComponent,
    MissionVisionComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
