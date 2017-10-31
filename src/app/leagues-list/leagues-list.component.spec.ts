import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LeaguesListComponent } from "./leagues-list.component";
import { MaterialModule } from "../material.module";

describe("LeaguesListComponent", () => {
  let component: LeaguesListComponent;
  let fixture: ComponentFixture<LeaguesListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [MaterialModule],
        declarations: [LeaguesListComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
