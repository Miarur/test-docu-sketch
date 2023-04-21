import { Component, OnInit } from '@angular/core';
import iconObj from  './icons';

@Component({
  selector: 'RandomIconView',
  templateUrl: './icons.component.html',
})


export class IconsComponent {
  buttonText = 'Get random icon';
  getIcon() {
    console.log(iconObj)
    const iconBlock = document.getElementById('iconView') as HTMLDivElement;
    // iconBlock.innerHTML = '';
    // iconBlock.innerHTML = iconObj;
    // const iconItem = Array.from(iconObj.node).map((n: any) => iconBlock.appendChild(n));
    // console.log(iconItem);

  }

}
