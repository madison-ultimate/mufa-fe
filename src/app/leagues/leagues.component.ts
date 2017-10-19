import { Component, OnInit } from '@angular/core';
import { LeagueService } from './leagues.service';
import { League } from './league';

@Component({
  selector: 'leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css'],
  providers: [LeagueService]
})
export class LeaguesComponent implements OnInit {
  // Component properties
  activeLeagues: League[];

  constructor(private leagueService: LeagueService) { }

  getActiveLeagues(): void {
    this.leagueService.getActiveLeagues()
      .then(leagues => this.activeLeagues = leagues);
  }

  ngOnInit() {
    this.getActiveLeagues();
  }
}
