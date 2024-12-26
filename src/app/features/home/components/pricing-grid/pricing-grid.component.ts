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
  // Tableau contenant les plans tarifaires.
  plans = [
    {
      name : 'Regular', // Le nom du plan
      price : 65,  // Le prix du plan
      status: 'regular', // Le style du plan
      features : [ // Les différentes fonctionnalités du plan
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
