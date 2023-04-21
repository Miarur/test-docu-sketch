import { Component, OnInit } from '@angular/core';
import { IconList } from 'src/app/models/interfaces';
import { IconsServices } from 'src/app/services/icons.services';
import { library, icon, findIconDefinition, parse } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);

@Component({
  selector: 'RandomIconView',
  templateUrl: './icons.component.html',
})

export class IconsComponent implements OnInit {
  loading = false;
  buttonText = 'Get random icon';
  iconsList: IconList = [];
  parsedIconsNames: any = [];
  iconTemplate: any;

  constructor(private iconsData: IconsServices) {

  }

  ngOnInit(): void {
    this.iconsData.getAll().subscribe(icons => {
      this.iconsList = icons;

      for (let [iconName] of Object.entries(icons)) {
        this.parsedIconsNames.push(`${iconName}`);
      }
    })
    this.generateRandomIcon();
  }

  generateRandomIcon() {
    console.log('click');
    setTimeout(() => {
      const randomIcon =  this.parsedIconsNames[Math.floor(Math.random() * this.parsedIconsNames.length)];
      const parseIconFromLibrary = parse.icon(randomIcon);
      const findIcon = findIconDefinition(parseIconFromLibrary);
      this.iconTemplate = icon(findIcon, {transform: {size: 100}}).html;
      const iconBlock = document.getElementById('iconView') as HTMLDivElement;
      iconBlock.innerHTML = '';
      iconBlock.innerHTML = this.iconTemplate;
    }, 3000);
  }
}
