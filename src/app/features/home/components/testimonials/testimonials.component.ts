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
  testimonials = [
    {
      name : "Wilson Thai",
      title: "“Love mathematics because of Besnik Academy”" ,
      comment : "“The curriculum was directly targeted toward applied techniques with high profile projects - real datasets with industry partners. It helped me achieve my career transition goal.“",
      image : "assets/img/img9.png",
      town : "Ontario, Canada",
      stars: 5
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
