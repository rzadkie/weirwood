import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
      <svg-icon icon="{{icon_name}}" class="icon"></svg-icon>
  `,
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() icon_name: string = '';


}
