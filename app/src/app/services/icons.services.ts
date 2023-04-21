import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { IconItem } from "../models/interfaces";

@Injectable({
  providedIn: 'root',
})


export class IconsServices {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IconItem[]> {
    return this.http.get<IconItem[]>(`https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.2.1/metadata/icons.json`)
  }

}
