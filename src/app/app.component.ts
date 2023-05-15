import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivesChallenge';
  isAdmin: boolean = false;

  toggleAdmin() {
    if(this.isAdmin){
      this.isAdmin = false;
    } else {
      this.isAdmin = true;
    }
  }
}
