import { Component } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {
  selected: boolean = false;
  selectTab(name: string){
    this.selected = !this.selected;
    if (this.selected){
      document.getElementById(name)!.style.color =  "#830000"
      document.getElementById(name)!.style.borderBlockColor =  "#830000"

    }
    else{
      document.getElementById(name)!.style.color =  "rgb(219, 219, 219)"
      document.getElementById(name)!.style.borderBlockColor =  "rgb(219, 219, 219)"
    }
    console.log('clicl');
    
  }
  
}
