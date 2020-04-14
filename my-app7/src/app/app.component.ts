import { Component } from '@angular/core';

const num = 7;

@Component({
  selector: 'jp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular CLI Course !';

  sayHello() {
    const x = 10;
  }
}
