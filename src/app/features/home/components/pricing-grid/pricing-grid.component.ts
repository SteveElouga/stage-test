import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-pricing-grid',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './pricing-grid.component.html',
  styleUrl: './pricing-grid.component.scss'
})
export class PricingGridComponent {
  plans = [
    {
      name : 'Regular',
      price : 65,
      status: 'regular',
      features : [
        '1 Day Event',
        '1 Speaker',
        'Interaction Sessions',
        '35 Classes'
      ]
    },
    {
      name : 'Medium',
      price : 95,
      status: 'medium',
      features : [
        '1 Day Event',
        '1 Speaker',
        'Interaction Sessions',
        '65 Classes'
      ]
    },
    {
      name : 'Premium',
      price : 445,
      status: 'premium',
      features : [
        '1 Day Event',
        '1 Speaker',
        'Interaction Sessions',
        '95 Classes'
      ]
    }
  ]
}
