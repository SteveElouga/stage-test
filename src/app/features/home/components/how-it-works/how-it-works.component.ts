import { Component } from '@angular/core';
import {CardComponent} from '../../../../shared/components/card/card.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule
  ],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent {
  // Tableau contenant la liste des items avec un titre, une description et un chemin vers une image (ici un logo)
  items = [
    {
      title : "Virtual learning",  // Le titre de la fonctionnalité
      description : "The only costs are for standard school supplies and voluntary field trips.", // La description de la fonctionnalité
      image: 'assets/img/svg1.svg' // Le chemin vers l'image de la fonctionnalité
    },
    {
      title : "Meaningful Education",
      description : "Many of our Connections Academy schools have additional accreditations.",
      image: 'assets/img/svg2.svg'
    },
    {
      title : "Online curriculum",
      description : "Our curriculum prepares students to go further in life by giving them support.",
      image: 'assets/img/svg3.svg'
    },
    {
      title : "Social interaction",
      description : "Students at Connections Academy collaborate on projects together.",
      image: 'assets/img/svg4.svg'
    }
  ]
}
