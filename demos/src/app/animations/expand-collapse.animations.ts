// Courtesy https://auth0.com/blog/real-world-angular-series-part-5/
import { trigger, transition, style, animate, state } from '@angular/animations';

const expandCollapseAnimations = [
  state(
    '*',
    style({
      // enter
      height: '*',
      opacity: 1,
      'overflow-y': 'hidden',
    })
  ),
  state(
    'void',
    style({
      // leave
      height: '0',
      opacity: 0,
      'overflow-y': 'hidden'
    })
  ),
  transition(':leave', animate('250ms ease-out')),
  transition(':enter', animate('250ms ease-in'))
];

/**
 * Expands content when content exposed by *ngIf
 */
export const expandCollapse = trigger('expandCollapse', expandCollapseAnimations);
