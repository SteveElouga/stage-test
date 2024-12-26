import { Component } from '@angular/core';
import {CardComponent} from '../../../../shared/components/card/card.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent {
  // Déclaration du tableau de cours (qui représente les données affichées par le composant)
  courses = [
    {
      title : "Hands-On Python & R In Data Science", // Le titre du cours
      description : "Hands-On Python & R In Data Science", // La description du cours
      image : 'assets/img/406dd2182f3ac9228cac57c4f1eddac1.png', // Le chemin vers l'image du cours
    },
    {
      title : "Science and Machine Learning Bootcamp",
      description : "Science and Machine Learning Bootcamp",
      image : 'assets/img/1c5cb66723e6b887d1d49eae4c41b9b3.png',
    },
    {
      title : "The Python Mega Course:Real Applications",
      description : "The Python Mega Course:Real Applications",
      image : 'assets/img/4112a7060b9dd652e80b37752172b49d.png',
    }
  ]
}
