import { style, animate, keyframes } from '@angular/animations';


export const AppAnimations: any = {}; // TODO: use an interface instead of `any`?

// TODO: use string constants instead of literals
AppAnimations['slide_in_left'] = animate(
  '0.65s ease-out',
  keyframes([
    style({ visibility: 'visible', opacity: 0, }),
    style({ transform: 'translateX(-1000px)', opacity: 0, }),
    style({ transform: 'translateX(0)', opacity: 1, }),
  ])
);

AppAnimations['slide_in_right'] = animate(
  '0.65s ease-out',
  keyframes([
    style({ visibility: 'visible', opacity: 0, }),
    style({ transform: 'translateX(1000px)', opacity: 0, }),
    style({ transform: 'translateX(0)', opacity: 1, }),
  ])
);

AppAnimations['slide_in_top'] = animate(
  '0.65s 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940)',
  keyframes([
    style({ visibility: 'visible', opacity: 0, }),
    style({ transform: 'translateY(-1000px)', opacity: 0, }),
    style({ transform: 'translateY(0)', opacity: 1, }),
  ])
);

AppAnimations['slide_in_bottom'] = animate(
  '0.65s 0.1s cubic-bezier(0.250, 0.460, 0.450, 0.940)',
  keyframes([
    style({ visibility: 'visible', opacity: 0, }),
    style({ transform: 'translateY(1000px)', opacity: 0, }),
    style({ transform: 'translateY(0)', opacity: 1, }),
  ])
);
