import { Component, OnInit } from "@angular/core";
import { LeagueService } from "./leagues-list/leagues.service";
import { League } from "./leagues-list/league";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [LeagueService]
})
export class AppComponent implements OnInit {
  title = "MUFA";

  selectedLeague: League = {
    id: null,
    name: null
  };
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

  // if signed in
  // if registered for any active leagues
  // set selectedLeague (zero index)
  // else
  // if session storage has league selected
  // set selectedLeague
  // else
  // show active leagues
}
