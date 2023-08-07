import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'svg-icon',
  styleUrls: ['./svg-icon.component.scss'],
  template: `
    <svg [currentScale]="scale">
      <use attr.:href="assets/icons/symbol-defs.svg#{{icon}}"></use>
    </svg>
  `
})
export class SvgIconComponent {
  @Input() icon: string = '';
  @Input() scale: number = 1;
}