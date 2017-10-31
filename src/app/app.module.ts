import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./material.module";
import { AppComponent } from "./app.component";
import { LeaguesListComponent } from "./leagues-list/leagues-list.component";
import { ViewProfileComponent } from "./view-profile/view-profile.component";

@NgModule({
  declarations: [AppComponent, LeaguesListComponent, ViewProfileComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      {
        path: "home",
        component: LeaguesListComponent
      },
      {
        path: "profile",
        component: ViewProfileComponent
      },
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
