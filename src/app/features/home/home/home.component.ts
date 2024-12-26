import { Component } from '@angular/core';
import {HeroComponent} from '../components/hero/hero.component';
import {HowItWorksComponent} from '../components/how-it-works/how-it-works.component';
import {CourseListComponent} from '../components/course-list/course-list.component';
import {VideoTestimonialComponent} from '../components/video-testimonial/video-testimonial.component';
import {TestimonialsComponent} from '../components/testimonials/testimonials.component';
import {PricingGridComponent} from '../components/pricing-grid/pricing-grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    HowItWorksComponent,
    CourseListComponent,
    VideoTestimonialComponent,
    TestimonialsComponent,
    PricingGridComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
