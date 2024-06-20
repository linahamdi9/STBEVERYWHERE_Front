import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RegisterRoutes } from './register.routing'; // Assuming this is your routing configuration

// Import your registration components
import { IDENTIFICATIONComponent } from './identification/identification.component';
import { MIEUXVOUSCONNAITREComponent } from './mieuxvousconnaitre/MIEUXVOUSCONNAITREComponent';
import { VALIDATIONComponent } from './validation/validation.component';
import { VALIDATION1Component } from './validation1/validation1.component';
import { InformationcomplementaireComponent } from './informationcomplementaire/informationcomplementaire.component';
import { InformationfinancieresComponent } from './informationfinancieres/informationfinancieres.component';
import { AutresinformationsComponent } from './autresinformations/autresinformations.component';
import { SignaturedesdocumentsComponent } from './signaturedesdocuments/signaturedesdocuments.component';
import { ChoixagenceComponent } from './choixagence/choixagence.component';
import { MotdepasseComponent } from './motdepasse/motdepasse.component';
import { PieceidentiteComponent } from './pieceidentite/pieceidentite.component';

@NgModule({

  imports: [ // Import necessary modules
    CommonModule,
    RouterModule.forChild(RegisterRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    IDENTIFICATIONComponent,
    MotdepasseComponent,
    MIEUXVOUSCONNAITREComponent,
    VALIDATIONComponent,
    VALIDATION1Component,
    InformationcomplementaireComponent,
    InformationfinancieresComponent,
    AutresinformationsComponent,
    ChoixagenceComponent,
    SignaturedesdocumentsComponent,
    PieceidentiteComponent,
   
  ],

  declarations: [
     

  ],
  
})
export class RegisterModule { }







