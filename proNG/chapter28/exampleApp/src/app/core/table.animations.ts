import { trigger, state, style, transition, animate } from '@angular/animations';

export const HighlightTrigger = trigger('rowHighlight', [
  state('selected', style({
    backgroundColor: 'lightgreen',
    fontSize: '20px'
  })),
  state('unselected', style({
    backgroundColor: 'lightsalmon',
    fontSize: '12px'
  })),
  transition('selected => unselected', animate('200ms')),
  transition('unselected => selected', animate('400ms'))
]);