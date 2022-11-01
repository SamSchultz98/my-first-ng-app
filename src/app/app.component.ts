import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Below is where you make your properties to be binded in the html
export class AppComponent {
  title = 'My first Angular App';
  name: string = "Sam";
}
