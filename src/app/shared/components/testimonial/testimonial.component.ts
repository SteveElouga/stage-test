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
  @Input() name: string = '';
  @Input() comment: string = '';
  @Input() image: string | null = null;
  @Input() title: string | null = null
  @Input() town: string | null = null
  @Input() stars: number | null = null

  getArray(stars: number | null) {
    return Array(stars).fill(0).map((x,i) => i+1)
  }
}
