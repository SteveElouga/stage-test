import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  // Les propriétés d'entrées pour configurer le composant
  @Input() name: string = ''; // Nom de l'auteur du testimonial
  @Input() comment: string = ''; // Le commentaire du testimonial
  @Input() image: string | null = null; // L'image de l'auteur (optionnelle)
  @Input() title: string | null = null; // Le titre du commentaire (optionnel)
  @Input() town: string | null = null; // La ville de l'auteur (optionnel)
  @Input() stars: number | null = null; // le nombre d'étoiles (optionnel)

  // Une fonction qui génère un tableau d'indices en fonction du nombre d'etoiles afin de pouvoir itérer sur ce tableau dans le template.
  getArray(stars: number | null) {
    return Array(stars).fill(0).map((x,i) => i+1)
  }
}
