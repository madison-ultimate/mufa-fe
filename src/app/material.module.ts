import { NgModule } from '@angular/core';
import { 
    MatButtonModule, 
    MatCheckboxModule, 
    MatMenuModule, 
    MatInputModule, 
    MatToolbarModule, 
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSidenavModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule, MatCheckboxModule, 
        MatMenuModule, MatInputModule, 
        MatToolbarModule, MatListModule,
        MatCardModule, MatIconModule,
        MatTooltipModule, MatSnackBarModule,
        MatSidenavModule
    ],
    exports: [
        MatButtonModule, MatCheckboxModule, 
        MatMenuModule, MatInputModule, 
        MatToolbarModule, MatListModule,
        MatCardModule, MatIconModule,
        MatTooltipModule, MatSnackBarModule,
        MatSidenavModule
    ]
  })
  export class MaterialModule { }
  