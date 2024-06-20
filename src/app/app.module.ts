import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule, LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// Custom layout components
import { FullComponent } from './layouts/full/full.component';
import { NavigationComponent } from './shared/header/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

// App routing configuration
import { Approutes } from './app-routing.module';

// Application root component
import { AppComponent } from './app.component';

// Shared component
import { SpinnerComponent } from './shared/spinner.component';
//import { NbThemeModule, NbLayoutModule, NbToastrModule } from '@nebular/theme';

// Registration components (assuming these are not used elsewhere)
import { InformationcomplementaireComponent } from './register/informationcomplementaire/informationcomplementaire.component';
import { InformationfinancieresComponent } from './register/informationfinancieres/informationfinancieres.component';
import { AutresinformationsComponent } from './register/autresinformations/autresinformations.component';
import { PieceidentiteComponent } from './register/pieceidentite/pieceidentite.component';
import { ChoixagenceComponent } from './register/choixagence/choixagence.component';
import { SignaturedesdocumentsComponent } from './register/signaturedesdocuments/signaturedesdocuments.component';
import { MotdepasseComponent } from './register/motdepasse/motdepasse.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';


@NgModule({
  declarations: [
    AppComponent,

    // Alphabetically ordered components
 
   
    SpinnerComponent,
     SuccessDialogComponent,
    
    // Layout components
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(Approutes, { useHash: false }),
    FullComponent,
    NavigationComponent,
    SidebarComponent,
    MatSnackBarModule
    
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 

