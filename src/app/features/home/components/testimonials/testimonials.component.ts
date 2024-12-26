import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestimonialComponent} from '../../../../shared/components/testimonial/testimonial.component';

// @ts-ignore
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule,  TestimonialComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  // Déclaration du tableau des testimonials
  testimonials = [
    {
      name : "Wilson Thai", // Nom de la personne ayant fait le témoignage.
      title: "“Love mathematics because of Besnik Academy”" , // Titre du témoignage.
      comment : "“The curriculum was directly targeted toward applied techniques with high profile projects - real datasets with industry partners. It helped me achieve my career transition goal.“", // Commentaire du témoignage.
      image : "assets/img/img9.png", // Chemin vers l'image de la personne ayant fait le témoignage.
      town : "Ontario, Canada", // Ville de la personne ayant fait le témoignage.
      stars: 5 // Le nombre d'étoiles.
    },
    {
      name : "Milena Belmar",
      title: "“There is so much to see and do all over world”" ,
      comment : '“The curriculum was directly targeted toward applied techniques with high profile projects - real datasets with industry partners. It helped me achieve my career transition goal.“',
      image : "assets/img/img10.png",
      town: "Argentina",
      stars: 5
    }
  ]
}
