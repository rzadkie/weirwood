import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.svg',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  fillColor = '#fafafa';
  strokeColor = 'none';
  @Input() transform: string = '';

}
