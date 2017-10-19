import { Component, OnInit } from '@angular/core';
import { League } from '../league';

@Component({
  selector: 'leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css'],
})
export class LeaguesComponent implements OnInit {
  // Component properties
  activeLeagues: League[];

  constructor() { }

  ngOnInit() {
  }
}
