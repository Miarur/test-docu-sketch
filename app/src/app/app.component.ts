import { Component, OnInit } from '@angular/core';
import { IconsServices } from './services/icons.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  iconsList = [];

  constructor(private iconsData: IconsServices) {

  }

  ngOnInit(): void {
    this.iconsData.getAll().subscribe(icons => {
      // console.log(icons)
    })
  }

}
