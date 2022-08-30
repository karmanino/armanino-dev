import { Component } from '@angular/core';
import {
  animate,
  group,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerTransition', [
      transition('* <=> *', [    
        query(':leave', style({ display: 'none'})),
        group([ 
          query(':enter', [
            style({ opacity: '0' }),
            animate('1.0s ease-in-out', style({ opacity: '1' }))
          ]),
          query(':leave', [
            style({ opacity: '1' }),
            animate('0.25s ease-in-out', style({ opacity: '0' }))]),
        ])
      ])
    ])
   ],
})
export class AppComponent {
  contentChanging = false;

  constructor(private contexts: ChildrenOutletContexts) {}

  getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData
  }
}
