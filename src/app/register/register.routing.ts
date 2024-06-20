import { Routes } from '@angular/router';

import { IDENTIFICATIONComponent } from './identification/identification.component';
import { MIEUXVOUSCONNAITREComponent } from './mieuxvousconnaitre/MIEUXVOUSCONNAITREComponent';
import { VALIDATIONComponent } from './validation/validation.component';
import { VALIDATION1Component } from './validation1/validation1.component';
import { InformationcomplementaireComponent } from './informationcomplementaire/informationcomplementaire.component';
import { InformationfinancieresComponent } from './informationfinancieres/informationfinancieres.component';
import { AutresinformationsComponent } from './autresinformations/autresinformations.component';
import { ChoixagenceComponent } from './choixagence/choixagence.component';
import { SignaturedesdocumentsComponent } from './signaturedesdocuments/signaturedesdocuments.component';
import { PieceidentiteComponent } from './pieceidentite/pieceidentite.component';
import { MotdepasseComponent } from './motdepasse/motdepasse.component';




export const RegisterRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'identification',
				component: IDENTIFICATIONComponent
			},
		
			 {
				path: 'lina',
				component: MIEUXVOUSCONNAITREComponent
			},
		
           {
				path: 'validation',
				component: VALIDATIONComponent
			},
			{
				path: 'validation1',
				component: VALIDATION1Component
			},
		    {
				path: 'informationcomplementaire',
				component: InformationcomplementaireComponent
			},
			{
				path: 'informationfinancieres',
				component: InformationfinancieresComponent
			},
			{
				path: 'autresinformations',
				component: AutresinformationsComponent
			},
			{
				path: 'choixagence',
				component: ChoixagenceComponent
			},
			{
				path: 'signaturedesdocuments',
				component: SignaturedesdocumentsComponent
			},
			{
				path: 'cin',
				component: PieceidentiteComponent
			},
			{
				path: 'password',
				component: MotdepasseComponent
			},
		
		
		
		
		
		
		
		
		
		
		]
	}
];
