import { trigger, state, style, transition, animate } from '@angular/animations';

export const slideInUpDown = [
  trigger('slideInUpDown', [
    state('shown', style({
      opacity: '1'
    })),
    state('hidden', style({
      transform: 'translateY(5%)', opacity: '0'
    })),
    transition('hidden => shown', [
      animate('500ms ease-in', style({transform: 'translateY(0%)', opacity: '1'}))
    ]),
    transition('shown => hidden', [
      animate('500ms ease-out', style({transform: 'translateY(5%)', opacity: '0'}))
    ])
  ])
];


export const slideInFromLeft = [
  trigger('slideInFromLeft', [
    state('shown', style({
      opacity: '1'
    })),
    state('hidden', style({
      transform: 'translateX(20%)', opacity: '0'
    })),
    transition('hidden => shown', [
      animate('500ms ease-in', style({transform: 'translateX(0%)', opacity: '1'}))
    ]),
    transition('shown => hidden', [
      animate('500ms ease-out', style({transform: 'translateX(-20%)', opacity: '0'}))
    ])
  ])
];

export const slideOut = [
  trigger('slideOut', [
    state('shown', style({
      opacity: '1'
    })),
    state('hidden', style({
      transform: 'translateX(20%)', display: 'none'
    })),
    transition('shown => hidden', [
      animate('500ms ease-out', style({transform: 'translateX(-20%)', display: 'none'}))
    ])
  ])
];
