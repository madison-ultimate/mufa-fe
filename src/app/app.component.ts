import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedLeague = {
    id: null,
    name: null
  };

  activeLeagues = [
    { id: 1, name: 'Swiss ABCD T/Th' },
    { id: 2, name: 'Swiss BCD M/W' }
  ]

  // if signed in
    // if registered for any active leagues
      // set selectedLeague (zero index)
  // else
    // if session storage has league selected
      // set selectedLeague
    // else 
      // show active leagues

}
