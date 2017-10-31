import { Component, OnInit } from "@angular/core";
import { LeagueService } from "./leagues.service";
import { League } from "./league";

@Component({
  selector: "app-leagues-list",
  templateUrl: "./leagues-list.component.html",
  styleUrls: ["./leagues-list.component.css"],
  providers: [LeagueService]
})
export class LeaguesListComponent implements OnInit {
  // Component properties
  activeLeagues: League[];

  constructor(private leagueService: LeagueService) {}

  getActiveLeagues(): void {
    this.leagueService
      .getActiveLeagues()
      .then(leagues => (this.activeLeagues = leagues));
  }

  ngOnInit() {
    this.getActiveLeagues();
  }
}
