import { trigger, state, style, transition, animate, group } from '@angular/animations';
import { getStylesFormClasses } from './animationUtils';
const commonStyles = {
  border: '4px solid black',
  color: 'white'
}
export const HighlightTrigger = trigger('rowHighlight', [
  // state('selected', style([commonStyles, {
  //   backgroundColor: 'lightgreen',
  //   fontSize: '20px'
  // }])),
  // state('unselected', style([commonStyles, {
  //   backgroundColor: 'lightsalmon',
  //   fontSize: '12px',
  //   color: 'black'
  // }])),
  // state('*', style({
  //   border: '2px solid black'
  // })),
  state('selected', style(getStylesFormClasses(['bg-success', 'h2']))),
  state('unselected', style(getStylesFormClasses('bg-info'))),
  state('void', style({
    // opacity: 0
    transform: 'translateX(-100%)'
  })),
  transition('* => unselected', animate('200ms')),
  transition('* => selected', animate('400ms 200ms ease-in')),
  // transition('* => selected', animate('400ms 200ms ease-in', style({
  //   backgroundColor: 'lightblue',
  //   fontSize: '25px'
  // }))),
  // transition('* => selected', [
  //   animate('400ms 200ms ease-in', style({
  //     backgroundColor: 'lightblue',
  //     fontSize: '25px'
  //   })),
  //   animate('250ms', style({
  //     backgroundColor: 'lightcoral',
  //     fontSize: '30px'
  //   })),
  //   animate('200ms')
  // ]),
  // transition('* => selected', [
  //   animate('400ms 200ms ease-in', style({
  //     backgroundColor: 'lightblue',
  //     fontSize: '25px'
  //   })),
  //   group([
  //     animate('250ms', style({
  //       backgroundColor: 'lightcoral'
  //     })),
  //     animate('450ms', style({
  //       fontSize: '30px'
  //     }))
  //   ]),
  //   animate('200ms')
  // ]),
  transition('void => *', animate('500ms'))
]);