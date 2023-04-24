import { Component } from '@angular/core';
import { datafields } from './Appinfo/appdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewApp';

  dataitems=datafields
}
