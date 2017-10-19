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
    MatSidenavModule,
    MatSelectModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule, MatCheckboxModule, 
        MatMenuModule, MatInputModule, 
        MatToolbarModule, MatListModule,
        MatCardModule, MatIconModule,
        MatTooltipModule, MatSnackBarModule,
        MatSidenavModule, MatSelectModule
    ],
    exports: [
        MatButtonModule, MatCheckboxModule, 
        MatMenuModule, MatInputModule, 
        MatToolbarModule, MatListModule,
        MatCardModule, MatIconModule,
        MatTooltipModule, MatSnackBarModule,
        MatSidenavModule, MatSelectModule
    ]
  })
  export class MaterialModule { }
  