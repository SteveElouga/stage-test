import { Component } from '@angular/core';
import {ButtonComponent} from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  // Fonction qui se lance quand le bouton est cliqué.
  handleButtonClick(){
    console.log("Button Clicked");
  }
}
