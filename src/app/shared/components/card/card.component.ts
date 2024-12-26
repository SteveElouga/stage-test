import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  // Les propriétés d'entrées pour configurer le composant
  @Input() title: string = '';  // Le titre de la carte
  @Input() description: string = ''; // La description de la carte
  @Input() image: string | null = null; // Le chemin vers l'image (optionnel)
  @Input() url: string | null = null; // L'URL (optionnelle)
}
