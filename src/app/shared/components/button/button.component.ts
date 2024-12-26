import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  // Propriétés d'entrées
  @Input() text: string = ''; // Le texte du bouton
  @Input() style: 'primary' | 'secondary' = 'primary'; // Le style du bouton
  // Propriété de sortie
  @Output() buttonClick = new EventEmitter<void>();  // L'output du bouton (qui permet de passer l'information que le bouton a été cliqué au composant parent)

  // Fonction qui émet l'événement quand le bouton est cliqué.
  handleClick() {
    this.buttonClick.emit();
  }
}
