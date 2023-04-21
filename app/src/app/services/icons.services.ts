import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})


export class IconsServices {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(`https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.2.1/metadata/icons.json`)
  }

}
